import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import Content from './Content';
import { Link } from "react-router-dom";
import Matching from "./Matching";

import '../css/currentUser.css'

export default function CurrentUser() {

    const [current, setCurrent] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8080/getCurrentUser`)
            .then(res => res.json())
            .then(resultat => {

                setCurrent(resultat);
            })
            .catch(error => console.error(error));

    }, [])
    const handleClicked = () => {

        setClicked(true)
        console.log('click', clicked)
    }
    return (
        <div className=" current">
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>     {current.first_name}  {current.last_name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>   Projets :  {current.projects && current.projects.map(item => {
                            return item.name
                        })}  </h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container content">
                            <div className="row">
                                <div className="col">
                                    <h3> Liste des besoins</h3>
                                </div>
                            </div>
                            {
                                current.needs ? current.needs.map((item, index) => {
                                    return (
                                        <>
                                            <Content data={item} action="edit" type="need" />

                                        </>
                                    )

                                })

                                    : <p>Liste des besoins est vide</p>
                            }
                            <div className="p-5">



                                <Link to={`/ajouter/need`}>
                                    <i className="large material-icons text-info">add</i>Ajouter un/des besoins
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container content">
                            <div className="row">
                                <div className="col">
                                    <h3> Liste des compétences</h3>
                                </div>
                            </div>
                            {
                                current.skills ? current.skills.map((item, index) => {
                                    return (

                                        <Content data={item} action="edit" type="skill" />

                                    )

                                }) : <p>Liste des compétences est vide</p>

                            }
                            <div className="p-5">
                                <Link to={`/ajouter/skill`}>
                                    <i className="large material-icons text-info">add</i>Ajouter une/des compétence(s)
                                     </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-info btn-md my-5 " onClick={handleClicked}>Call Matching </button>

                </div>
                {clicked == true ?
                    <div className="col px-5 my-5">
                        <Matching />
                    </div>
                    : <div></div>
                }
            </div>
        </div >
    )
}
