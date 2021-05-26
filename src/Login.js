import React from 'react';
import Homemainpage from './Homemainpage';

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
                        <Homemainpage {...props}/>
                        <p>Don't have an account ? <button onClick={()=> setHasAccount(!hasAccount)}>Sign Up</button></p>
                    </>
                ):(
                    <>
                    <button onClick={handleSignUp}>Sign Up</button>
                    <p>Have an account ? <button  onClick={()=> setHasAccount(!hasAccount)}>Sign In</button></p>
                    </>
                )}
            </div>
            </div>
            
        </section>
    )

}

export default Login;