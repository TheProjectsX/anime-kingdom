"use client";

import { Helmet } from "react-helmet";

// Created for Server Side Pages
const PageTitle = ({ children }) => {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    );
};

export default PageTitle;
