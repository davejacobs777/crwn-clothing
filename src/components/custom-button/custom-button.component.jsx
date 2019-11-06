import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;

// <CustomButton type='submit'> Sign in </CustomButton>
// children = Sign in

// props.children
// props.children is available on every component.
// It contains the content between the opening and closing tags of a component. For example:
// <Welcome>Hello world!</Welcome>

// inverted does the same thing as isGoogleSignIn
