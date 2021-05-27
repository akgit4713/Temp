import React from 'react';
import Homemainpage from './Homemainpage';
import Homelogin from './Homelogin';

const Login= (props) =>{

    const { 
        email,
        setEmail,
        password,
        setPassword,
        handleLogIn,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    }=props;


    return( 
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <p className="errorMsg" >{emailError}</p>
            <label>Password</label>
            <input
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                 <p className="errorMsg" >{passwordError}</p>
            <div classname="btnContainer">
                {hasAccount? (
                    <>
                        <button onClick={handleLogIn}>Sign In</button>
                       
                        <p>Don't have an account ? <button onClick={()=> setHasAccount(!hasAccount)}>Sign Up</button></p>
                    </>
                ):(
                    <>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <p>Have an account ? <button  onClick={()=> setHasAccount(!hasAccount)}>Sign In</button></p>
                    </>
                )}
            </div>
            <div>
                Note: If you Sign In with Google, you will have both read and write access, else
                you will only have read access.
            </div>
            </div>
            
        </section>
    )

}

export default Login;