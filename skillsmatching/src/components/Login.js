import React, { useState, useEffect } from 'react'
import '../css/login.css'
import { useHistory, Link } from "react-router-dom";

export default function Login() {
    const [connexion, setconnexion] = useState(false)
    const [first_Name, setFirst_Name] = useState("")
    const [id, setID] = useState("")
    const history = useHistory()
    const [message, setMessage] = useState("")

    const handleFirst = (e) => {
        console.log(e.target.value)
        setFirst_Name(e.target.value)
    }
    const handleID = (e) => {
        console.log(e.target.value)
        setID(e.target.value)
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            first_name: first_Name,
            id: id,
        })
    };
    const onSubmit = () => {
        console.log("hello")
        fetch(`http://localhost:8080/login`, requestOptions)
            .then(res => res.json())
            .then(response => {
                console.log("submit response", response)

                //  localStorage.setItem('token', response.token);
                setMessage(response)
                if (response) {
                    history.pushState("/currentUser")
                    // window.location('/currentUser')
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }




    //


    return (
        <div className="log">
            <div id="login">
                <h3 className="text-center text-white pt-5">Login form</h3>

                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form">
                                    <div className="form-group">
                                        <label for="username" className="text-info">FirstName:</label><br />
                                        <input type="text" name="first_name" id="username" className="form-control" onChange={handleFirst} />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Identifiant:</label><br />
                                        <input type="password" name="id" id="password" className="form-control" onChange={handleID} />
                                    </div>
                                    <div className="form-group">
                                        <input type="button" onClick={onSubmit} value="Login" className="btn btn-info" />
                                    </div>
                                    <div className="form-group">
                                        <Link to="/signUp" className="text-info " >S'inscrire</Link>
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
