import React, { createContext, useContext, useEffect, useState } from "react";
const Context = createContext({});
function Tab({ children }) {
    const [idActive, setIdActive] = useState("");
    const [tabs] = useState([]);
    /** -NOTE-  Set the default tab = 1 when the component completed rendering */
    const registerTab = (id) => {
        /** (💡)  - tác động trực tiếp tới id mà không thông qua hàm setTabs(none rerender)  */
        tabs.push(id);
        if (tabs.length === 1) {
            setIdActive(id);
        }
    };
    return <Context.Provider value={{ setIdActive, idActive, registerTab }}>{children}</Context.Provider>;
}

Tab.Content = ({ id, children }) => {
    const { idActive } = useContext(Context);
    const [isShow, setIsShow] = useState(false);
    useEffect(() => {
        setIsShow(idActive === id);
    }, [idActive === id]);
    if (idActive === id) {
        return <div className={`tab-pane fade ${isShow ? "show" : ""} active`}>{children}</div>;
    }
    return null;
};

Tab.Title = ({ id, children }) => {
    const { idActive, setIdActive, registerTab } = useContext(Context);

    useEffect(() => {
        registerTab(id);
    }, []);
    const onClick = (ev) => {
        ev.preventDefault();
        setIdActive(id);
    };
    return (
        <a onClick={onClick} className={`nav-link ${idActive === id ? "active" : ""}`}>
            {children}
        </a>
    );
};

export default Tab;
