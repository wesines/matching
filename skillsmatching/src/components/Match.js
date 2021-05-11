import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Match(props) {

    const [currentNeeds, setCurrentNeeds] = useState([])
    const [pourcent, setPourcent] = useState(0)
    const [UsersIDs, setUsersIDs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/getCurrentUser`)
            .then(res => res.json())
            .then(resultat => {
                setCurrentNeeds(resultat.needs);
                let nbreOfCurrentNeeds = resultat.needs.length
                let matching = props.data.matching
                let pourcentage = ((matching * 100) / nbreOfCurrentNeeds)
                if (!Number.isInteger(pourcentage)) {
                    setPourcent(pourcentage.toFixed(2))
                } else {
                    setPourcent(pourcentage)
                }

            })
            .catch(error => console.error(error));

    }, [])

    const handelClicked = () => {
        alert(`Vous allez appeler M/Mme${props.data.first_name} ${props.data.last_name}`)
        const Contacted = UsersIDs

        Contacted.push(props.data.id)


        setUsersIDs(Contacted)


        localStorage.setItem("IDsContacted", JSON.stringify(UsersIDs))


    }
    return (
        <>




            <div className="row border border-info">
                <div className="col-1 border border-info text-danger">
                    {pourcent}%
                </div>

                <div className="col-2 border border-info">
                    {props.data.first_name}   {props.data.last_name}
                </div>

                <div className="col-4 border border-info text-left">
                    <ul>{props.data.skills && props.data.skills.map(item => {
                        return <li> {item}</li>
                    })}
                    </ul>
                </div>
                <div className="col-4  border border-info text-left ">
                    <ul>
                        {props.data.projects && props.data.projects.map(item => {
                            return <li> {item.name}</li>
                        })}
                    </ul>
                </div>

                <div className="col-1 border border-info ">
                    <Link to="#" className=" " onClick={() => handelClicked()}>
                        <i className="large material-icons text-danger my-2">  local_phone</i></Link>
                </div>
            </div >

        </>
    )
}
