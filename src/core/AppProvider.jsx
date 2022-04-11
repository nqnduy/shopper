import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export function AppProvider({ children, store }) {
    return (
        <AppProvider>
            <Provider store={store}>{children}</Provider>
        </AppProvider>
    );
}
