import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

// <CustomButton type='submit'> Sign in </CustomButton>
// children = Sign in

// props.children
// props.children is available on every component.
// It contains the content between the opening and closing tags of a component. For example:
// <Welcome>Hello world!</Welcome>

// inverted does the same thing as isGoogleSignIn
