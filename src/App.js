import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import CheckoutPage from "./pages/checkout/checkout.component";

import './App.css';
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

class App extends Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        // userAuth = userAuth is stored in the Firebase Authentication table
        // onAuthStateChanged = observable
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) { //null / DocumentReference
                const userRef = await createUserProfileDocument(userAuth); //DocumentReference that exists in database

                // snapshot: DocumentSnapshot => {}
                // onSnapshot - returns a DocumentSnapshot object that represents the data
                // that is currently stored on the database
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data() //.data() returns a JSON object of the document
                    })
                });
            }

            setCurrentUser(userAuth);
            //add ShopData into our Firestore once (lesson 16.6)
            //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
        })
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth !== null) this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<Authentication/>)}/>
                </Switch>
            </div>
        )
    }
}

// Any component that gets rendered by a route gets passed three props/arguments - history, location, match.
// The Homepage component only receives the props from the route component, does not get passed to its children.
// To avoid prop drilling from Homepage to the MenuItem (a child), we use a higher-order component
// called "withRouter" from react-router-dom - See MenuItem Component

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
// this.props.currentUser

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch(action)
});
// this.props.setCurrentUser

export default connect(mapStateToProps, mapDispatchToProps)(App);
