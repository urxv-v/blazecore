import React, { useState } from 'react';
import '../Login.css';
import { login } from '../api/login';

interface LoginFormProps {
    setToken: (token: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitLogin = () => {
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }
        
        setIsLoading(true);
        setError("");
        
        login(email, password)
          .then((response) => {
              setToken(response);
          })
          .catch((error) => {
              console.error(error);
              setError("Invalid email or password. Please try again.");
          })
          .finally(() => {
              setIsLoading(false);
          });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            submitLogin();
        }
    };

    return (
        <div className="login-container">
            <div className="login">
                <div className="login-logo">
                    <div className="login-logo-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14"></path>
                        </svg>
                    </div>
                    <div className="login-logo-text">Dashboard</div>
                </div>

                <h1 className="login-title">Sign in to your account</h1>
                
                {error && <div className="login-error">{error}</div>}
                
                <div className="login-input-group">
                    <input
                        type="text"
                        className="login-input"
                        placeholder="Email"
                        autoFocus
                        onChange={handleUsernameChange}
                        onKeyDown={handleKeyDown}
                        value={email}
                    />
                </div>
                
                <div className="login-input-group">
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        onKeyDown={handleKeyDown}
                        value={password}
                    />
                </div>
                
                <button 
                    className="login-button"
                    id="login-button"
                    onClick={submitLogin}
                    disabled={isLoading}
                >
                    {isLoading ? "Signing in..." : "Sign In"}
                </button>
                
                <div className="login-footer">
                    Don't have an account? <a href="#" className="login-link">Create one</a>
                </div>
            </div>
        </div>
    );
};
