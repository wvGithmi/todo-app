import React from "react";
import "./login.css";
import "src/services/AuthService";

export default function Login() {

    return (
        <div className = "login">
            <header>Todo-List App</header>

            <p className="p1">Welcome Back!</p>

            <p className="p2">SIGN-IN</p>

            <form name="form">

                <div className = "row">
                    <div className = "sec1">
                        <label>email</label><br/><br/><br/>
                        <label>password</label><br/>
                    </div>

                    <div className = "sec2">
                        <input type="email" id="email" size="30" required/><br/><br/><br/>
                        <input type="password" id="password" size="30" required/>
                    </div>
                </div>

                <input type="checkbox" name="rememberme" id="customControlInline"/>
                <label className = "checkbox">remember me</label><br/><br/>

                <button type="submit">signin</button>

                <p>Don't have an account? <span><a href="#">Sign Up</a></span></p>
                <a href="#">Forgot your password?</a>

            </form>
        </div>
    );

}
