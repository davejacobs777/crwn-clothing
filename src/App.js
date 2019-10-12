import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Authentication from "./pages/authentication/authentication.component";
import {auth} from './firebase/firebase.utils';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});

            console.log(user);
        })
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth !== null) this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={Authentication}/>
                </Switch>
            </div>
        )
    }


}

export default App;
