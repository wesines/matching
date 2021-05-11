import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import '../css/currentUser.css'

export default function ModifierContent(props) {
    const [contentValue, setContentValue] = useState("")
    const history = useHistory();
    const requestOptionsPut = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: contentValue })
    };


    let typeContent, actionContent = ""
    const id = props.match.params.id || null
    typeContent = props.match.params.type
    actionContent = props.match.params.action

    useEffect(() => {
        if (typeContent === "need") {
            fetch(`http://localhost:8080/getNeedByID/${id}`)
                .then(res => res.json())
                .then(resultat => {
                    console.log('res', resultat)
                    setContentValue(resultat.content)
                })
        } else if (typeContent === "skill") {
            fetch(`http://localhost:8080/getSkillByID/${id}`)
                .then(res => res.json())
                .then(resultat => {
                    setContentValue(resultat.content)

                })
        }

    }, [id])


    const handleChange = (e) => {

        setContentValue(e.target.value)
    }
    const handleSubmit = (e) => {
        setContentValue(e.target.value)
        if (typeContent === "need") {
            fetch(`http://localhost:8080/editNeed/${id}`, requestOptionsPut)
                .then(res => res.json())
                .then(resultat => {
                    setContentValue(resultat.content)
                    history.push("/currentuser")
                })
        } else if (typeContent === "skill") {
            fetch(`http://localhost:8080/editSkill/${id}`, requestOptionsPut)
                .then(res => res.json())
                .then(resultat => {
                    setContentValue(resultat.content)
                    history.push("/currentuser")
                })
        }
    }





    return (
        <div className="">
            <form className="form-group" >
                <div className="container edit-content">
                    <div className="row">
                        <div className="col mt-3">
                            Veuillez modifier le  texte ci-dessous
                        </div>
                    </div>
                    <div className="row">
                        <div className="col edit">
                            <input type="text" className="form-control" name="content" value={contentValue} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col mt-5">
                            <button type="button" className="btn btn-info" name="Modifier" onClick={handleSubmit}  >Modifier</button>




                        </div>

                    </div>

                </div>
            </form>

        </div>

    )




}



