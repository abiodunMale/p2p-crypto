import { Link } from 'react-router-dom';

const Login = (props) => {
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
                            <form>
                                <div className="mb-3">
                                    <label  className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-5">
                                    <label  className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                    <div id="passwordHelp" className="form-text pull-right">Forgot password?</div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</button>
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