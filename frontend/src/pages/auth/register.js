import { useState } from 'react';


const Register = (props) => {

    const [userInfo, setUserInfo] = useState({firstname: '', lastname: ''});
    const [submitForm, setSubmitForm] = useState(false);
    const [formError, setFormError] = useState({validEmail: false, validFname: false, validLname: false, validPassword: false});


    const changeInfo = (e) => {
        const { name, value } = e.target;
        setUserInfo({...userInfo, [name] : value});
        validateForm(name, value);
    };

    const validateForm = (name, value) => {
        const regEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}$/;
        const validFname = (userInfo.firstname && userInfo.firstname.length >= 3) || false;
        const validLname = (userInfo.firstname && userInfo.lastname.length >= 3) || false;
        console.log(validFname);
        let errors = { validFname: validFname, validLname: validLname };
        console.log(errors);
        // switch (name) {
        //     case 'email':
        //         if(!regEmail.test(value)){
        //             errors.validEmail = true
        //         }else{
        //             errors.validEmail = false
        //         }
        //         break;
        //     case 'firstname':
        //         if(value === ''){
        //             errors.validFname = true
        //         }else{
        //             errors.validFname = false
        //         }
        //         break;
        //     case 'lastname':
        //         if(value === ''){
        //             errors.validLname = true
        //         }else{
        //             errors.validLname = false
        //         }
        //         break;
        //     case 'password':
        //         if(!regPassword.test(value)){
        //             errors.validPassword = true
        //         }else{
        //             errors.validPassword = false
        //         }
        //         break;
        //     default:
        //         break;
        // }
        setFormError({...formError, ...errors });
    };

    const registerUser = (e) => {
        e.preventDefault();
        console.log(userInfo);

        setSubmitForm(true);
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
                                            className={"form-control "+(formError.validFname ? "is-invalid" : "")} 
                                            name="firstname"
                                            onChange={changeInfo}
                                        />
                                        <div className="invalid-feedback">
                                            Please provide first name.
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Last Name</label>
                                        <input 
                                            type="text" 
                                            className={"form-control "+(formError.validLname ? "is-invalid" : "")}
                                            name="lastname"
                                            onChange={changeInfo}
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
                                        className={"form-control " +(formError.validEmail ? "is-invalid" : "")}
                                        name="email"
                                        onChange={changeInfo}
                                     />
                                     <div className="invalid-feedback">
                                        Please provide a valid email address.
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label  className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        className={"form-control "+(formError.validPassword ? "is-invalid" : "")}
                                        name="password"
                                        onChange={changeInfo}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid password.
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary"
                                    // disabled={!formError.validForm}
                                    >
                                       {submitForm ? <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i> : <> <i className="fa fa-lock" aria-hidden="true"></i> Register </>} 
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