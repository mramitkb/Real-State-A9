import { createContext } from "react";
import PropTypes from 'prop-types'

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const authInfo = {

    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;
// 1. export AuthProvider to the main jsx for get all info as a children
// 2.