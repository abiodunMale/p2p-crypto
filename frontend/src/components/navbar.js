import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutUserAction } from "../store/actions/authActions";

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logoutHandler = () => {
        dispatch(logoutUserAction());
        history.push('/');
    };

    return (
        <div className='page-content'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={logoutHandler}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;