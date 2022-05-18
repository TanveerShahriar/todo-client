import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomTitle = ({title, children}) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Todo-App</title>
            </Helmet>
            {children}
        </div>
    );
};

export default CustomTitle;