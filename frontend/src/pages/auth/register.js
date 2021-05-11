import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../store/actions/authActions';


const Register = (props) => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.userRegister);

    const { loading, message } = state;

    const [userInfo, setUserInfo] = useState({});
    const [disableBtn, setDisableBtn] = useState(false);
    const [formError, setFormError] = useState({validEmail: false, validFname: false, validLname: false, validPassword: false});

    // useEffect(() => {
    //     if(message && message.type === 'success'){
    //         setTimeout(() => {
    //             props.loginPage();
    //         }, 3000);
    //     }
    // }, [state]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({...userInfo, [name] : value});
        validateForm(name, value);
    };

    const validateForm = (name, value) => {
        const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/;
        const reqletter = /[^a-zA-Z]/;
        let errors = {...formError};

        switch (name) {
            case 'email':
                errors.validEmail = regEmail.test(value);
                break;
            case 'firstname':
                errors.validFname = value.length >= 3 && !reqletter.test(value);
                break;
            case 'lastname':
                errors.validLname = value.length >= 3 && !reqletter.test(value);
                break;
            case 'password':
                errors.validPassword = regPassword.test(value);
                break;
            default:
                break;
        }
        setFormError({...formError, ...errors});
        setDisableBtn((errors.validEmail && errors.validFname && errors.validPassword && errors.validLname) || false);
    };



    const registerUser = (e) => {
        e.preventDefault();

        const userDetails = {
            firstname: userInfo.firstname,
            lastname: userInfo.lastname,
            emailaddress: userInfo.email,
            password: userInfo.password
        };

        dispatch(registerAction(userDetails));
    };

    const handleValidInput = (input, value) => {
        return "form-control " +(input?  "is-valid" : input === false && value ? "is-invalid" : "");
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col" style={{marginTop: 50}}>
                    <img src="/register.png" className="img-fluid"/>
                </div>
                <div className="col" style={{marginTop: 100}}>
                    <div className="card p-3 logincard" style={{width: '30rem'}}>
                        <p className="text-center">Crypto</p>
                        <div className="card-body">
                            <form onSubmit={registerUser}>
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input 
                                            type="text" 
                                            className={handleValidInput(formError.validFname, userInfo.firstname)} 
                                            name="firstname"
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            Please provide first name.
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input 
                                            type="text" 
                                            className={handleValidInput(formError.validLname, userInfo.lastname)}
                                            name="lastname"
                                            onChange={handleChange}
                                        />
                                        <div className="invalid-feedback">
                                            Please provide last name.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className={handleValidInput(formError.validEmail, userInfo.email)}
                                        name="email"
                                        onChange={handleChange}
                                     />
                                     <div className="invalid-feedback">
                                        Please provide a valid email address.
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label  className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className={handleValidInput(formError.validPassword, userInfo.password)}
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <div className="invalid-feedback">
                                        Password should contain atleast one number, uppercase, and must be atleast 5 characters
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary"
                                    disabled={!disableBtn}
                                    >
                                       {loading ? <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i> : <> <i className="fa fa-lock" aria-hidden="true"></i> Register </>} 
                                    </button>
                                </div>
                            </form>
                            <p className="text-center p-3" style={{marginBottom: -25}}><button onClick={ () => props.loginPage() } className="btn btn-light">Have an account? Login</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;