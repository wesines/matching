import React, { useState, useEffect } from 'react'
import Match from './Match';

export default function Matching(props) {
    const [matchingDetails, setMatchingDetails] = useState([])
    const getStorage = () => {
        return JSON.parse(localStorage.getItem("IDsContacted") || "[]");

    }
    const [ContactedUsersIDs, setContactedUsersIDs] = useState(getStorage())




    //liste des users avec leur matching 
    useEffect(() => {
        fetch(`http://localhost:8080/getMatching`)
            .then(res => res.json())
            .then(resultat => {
                setMatchingDetails(resultat)
                setContactedUsersIDs(getStorage())
            })
            .catch(error => console.error(error));
    }, [])



    return (

        <div className="container  border border-info">
            <div className="row border border-info  font-weight-bold text-white bg-info">
                <div className="col-1 ">
                    %
                </div>

                <div className="col-2 ">
                    Nom et prénom
                </div>

                <div className="col-4 ">
                    skills
               </div>
                <div className="col-4 ">
                    Projects
                </div>
                <div className="col-1 ">
                    Call
                </div>

            </div >
            {
                matchingDetails && matchingDetails.map(item => {
                    console.log("co", ContactedUsersIDs)
                    console.log("localStorage.getItem(IDsContacted)", localStorage.getItem("IDsContacted"))

                    if (ContactedUsersIDs.indexOf(item.id) == -1) {
                        return (<Match data={item} />)
                    }


                })
            }

        </div>
    )
}
