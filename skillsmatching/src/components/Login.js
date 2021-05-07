import React from 'react'
import '../css/login.css'
import { Link } from "react-router-dom";

export default function login() {
    return (
        <div className="container">
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <div className="form-group">
                                        <label for="username" className="text-info">Identifiant:</label><br />
                                        <input type="text" name="username" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Mot de passe:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" />
                                    </div>

                                    <div id="register-link" className="text-right">
                                        <Link to="/currentUser" className="text-info">Connexion</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
