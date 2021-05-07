import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import '../css/currentUser.css'

export default function CurrentUser() {

    const [current, setCurrent] = useState([])

    useEffect(() => {
        console.log("ser")
        fetch(`http://localhost:8080/getCurrentUser`)
            .then(res => res.json())
            .then(resultat => {
                console.log("resultat", resultat)
                setCurrent(resultat);
            })
            .catch(error => console.error(error));

    }, [])

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>     {current.first_name}  {current.last_name}</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul>
                            {
                                current.needs ? current.needs.map((item, index) => {
                                    return (<li key={index}>{item.content}</li>)

                                }) : <p>Cet utilisateur n'a pas de besoins</p>
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            {
                                current.needs ? current.skills.map((item, index) => {
                                    return (<li key={index}>{item.content}</li>)

                                }) : <p>Cet utilisateur n'a pas de besoins</p>
                            }
                        </ul>
                    </div>
                </div>
                <div className="col">
                    call matching
                     </div>
            </div>
        </div>
    )
}
