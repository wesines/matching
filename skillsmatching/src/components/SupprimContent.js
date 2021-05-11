import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const SupprimContent = (props) => {
    const history = useHistory();
    const [current, setCurrent] = useState([])

    let actionContent = ""
    const id = props.match.params.id
    actionContent = props.match.params.action

    useEffect(() => {
        if (actionContent === "need") {
            fetch(`http://localhost:8080/removeNeed/${id}`, { method: 'DELETE' }, []);
            fetch(`http://localhost:8080/getCurrentUser`)
                .then(res => res.json())
                .then(resultat => {

                    setCurrent(resultat);
                })
                .catch(error => console.error(error));


            history.push('/currentuser')
        }
        else if (actionContent === "skill") {
            fetch(`http://localhost:8080/removeSkill/${id}`, { method: 'DELETE' }, []);
            fetch(`http://localhost:8080/getCurrentUser`)
                .then(res => res.json())
                .then(resultat => {
                    setCurrent(resultat);

                })
                .catch(error => console.error(error));

            history.push('/currentuser')

        }
    })

    return (
        <div>

        </div>
    )

}
export default SupprimContent
