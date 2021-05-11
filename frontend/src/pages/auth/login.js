import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUserAction } from '../../store/actions/authActions';
import 'react-toastify/dist/ReactToastify.css';



const Login = (props) => {

    const [loginDetails, setLoginDetails] = useState({});
    const [formError, setFormError] = useState({validEmail: false, validPassword: false});
    const [disableBtn, setDisableBtn] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();
    
    const  userLogin = useSelector(state => state.userAuth);
    const {token, loading} = userLogin;
    
    const changeValue = (e) => {
        const {name, value} = e.target;
        setLoginDetails({...loginDetails, [name]: value});
        validateForm(name, value);
    };

    const validateForm = (name, value) => {
        const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let errors = formError;

        switch (name) {
            case 'email':
                errors.validEmail = regEmail.test(value);
                break;
            case 'password':
                errors.validPassword = value.length >= 5;
                break;
            default:
                break;
        }

        setFormError({...formError, errors});
        setDisableBtn(errors.validEmail && errors.validPassword);
    };

    const handleValidInput = (input, value) => {
        return "form-control " +(input ? "is-valid" : input === false && value ? "is-invalid" : "");
    };
    
    const loginHandler = (e) => {
        e.preventDefault();

        const loginData = {
            emailaddress: loginDetails.email, 
            password: loginDetails.password
        };
        
        dispatch(loginUserAction(loginData));
    };

    useEffect(() => {
        if(token) {
            history.push('/demo');
        }
    }, [userLogin]);

    return(
        <div className="container">
            <div className="row">
                <div className="col" style={{marginTop: 45}}>
                    <img src="/login.png" className="img-fluid"/>
                </div>
                    <div className="col" style={{marginTop: 100}}>
                        <div className="card p-3 logincard" style={{width: '30rem'}}>
                            <p className="text-center">Crypto</p>

                            <div className="card-body">
                                <form onSubmit={loginHandler}>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" 
                                            onChange={changeValue} 
                                            className={handleValidInput(formError.validEmail, loginDetails.email)} 
                                            name="email"
                                        />
                                        <div className="invalid-feedback">
                                            Please provide a valid email address.
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <label  className="form-label">Password</label>
                                        <input type="password"
                                            onChange={changeValue} 
                                            className={handleValidInput(formError.validPassword, loginDetails.password)} 
                                            name="password"
                                        />
                                        <div className="invalid-feedback">
                                            Password should be atleast 5 characters
                                        </div>
                                        <div id="passwordHelp" className="form-text pull-right">Forgot password?</div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button 
                                            disabled={!disableBtn}
                                            type="submit" 
                                            className="btn btn-primary"> 
                                            {loading ? <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i> : <> <i className="fa fa-sign-in" aria-hidden="true"></i> Login </> }
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center p-3" style={{marginBottom: -25}}><button onClick={ () => props.registerpage()} className="btn btn-light">create account</button></p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};


export default Login;