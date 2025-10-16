
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login Attempted! (Placeholder action)');
    };

    return (
        <>
            <title>Login - Air Lines International</title>
            
           
            <div className="page-container login-container"> 
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    
                   
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" required />
                    </div>
                    
                   
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>
                    
                  
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                    
                    
                    <div className="text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;