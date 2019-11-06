import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils.js'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

const Header = ({currentUser, hidden}) => (<div className='header'>
    <Link className='logo-container' to='/'>
        <Logo className='logo'/>
    </Link>
    <div className="options">
        <Link to='/shop' className='option'>
            SHOP
        </Link>
        <Link to='/shop' className='option'>
            CONTACT
        </Link>
        {currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
        ) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        )}
        <CartIcon/>
    </div>
    {
        hidden ? null : (<CartDropdown/>)
    }

</div>);

// state comes from the root-reducer, ie. state.user.currentUser
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
