import { useState } from "react";
import Login from "./login";
import Register from "./register";

const Auth = () => {
    const [page, setPage] = useState(true);
    const registerPage = () => { setPage(false) };
    const loginPage = () => { setPage(true) };

    return(
        <>
            { page ? <Login registerpage={registerPage}/> : <Register loginPage={loginPage} /> }
        </>
    );
};

export default Auth;