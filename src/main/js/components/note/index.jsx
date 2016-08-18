import React from 'react';
import "./note.css";

//
/*
 From the documentation. I did not understand why Note should not know how it is rendered:
 Having the concept of Note is useful especially when we'll expand the application further so there's no need to remove it.
 Instead, we can give the control over its rendering behavior to Notes and wire it there.
 */
export default ({children, ...props}) => (
    <div {...props}>
        {children}
    </div>
);