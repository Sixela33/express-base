import { createContext, useState } from "react";

const AlertContext = createContext({});

export const AlertProvider = ({ children }) => {
    const [message, _setMessage] = useState(null);
    const [severity, setSeverity] = useState();

    const closeAlert = () => {
        _setMessage(null)
    }

    const setMessage = (_message, _severity="success") => {
        console.log(typeof message)
        _setMessage(_message)
        setSeverity(_severity)
    }

    return (
        <AlertContext.Provider value={{ message, setMessage, severity, closeAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContext