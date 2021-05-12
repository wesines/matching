import React, { useState, useEffect } from 'react'
import '../css/inscription.css'
import { Link } from "react-router-dom";
import Select from 'react-select';


export default function Inscription() {
    const [data, setData] = useState("")
    const [last_Name, setLast_Name] = useState("");
    const [first_Name, setFirst_Name] = useState("");
    const [dataSkills, setdataSkills] = useState([])
    const [dataNeeds, setdataNeeds] = useState([])
    const [dataUser, setDataUser] = useState([])


    useEffect(() => {
        getListNeeds()


    }, [])
    const getListNeeds = () => {
        fetch(`http://localhost:8080/getAllNeeds`)
            .then(res => res.json())
            .then(resultat => {

                setData(resultat.list_of_needs)
            })

    }
    // handle onChange event of the dropdown
    const handleChangeNeeds = (e) => {
        let options = e.target.options;
        let selectedOptions = [];
        console.log("options", e.target)
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        console.log("selectedOptions", selectedOptions)

        setdataNeeds(selectedOptions);
    }
    // handle onChange event of the dropdown
    const handleChangeSkills = (e) => {
        let options = e.target.options;
        let selectedOptions = [];
        console.log("options", e.target)
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(options[i].value);
            }
        }
        console.log("selectedOptions", selectedOptions)

        setdataSkills(selectedOptions);
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataUser)
    };
    const onSubmit = (e) => {
        setDataUser({ "first_name": first_Name, "last_name": last_Name, "needs": dataNeeds, "skills": dataSkills })
        e.preventDefault();
        fetch(`http://localhost:8080/signUp`, requestOptions)
            .then(response => response.json())
            .then(data => console.log("data", data));
        window.location('/currentUser')

    };
    return (
        console.log("data", data),
        <div className="log">
            <div id="login">
                <h3 className="text-center text-white pt-5" onSubmit={(e) => onSubmit(e)}>Inscription form</h3>
                <div className="container">
                    <div id="login-row" className="row justify-content-center align-items-center">
                        <div id="login-column" className="col-md-6">
                            <div id="login-box" className="col-md-12">
                                <form id="login-form" className="form" action="" method="post">
                                    <div className="form-group">
                                        <label for="username" className="text-info">LastName:</label><br />
                                        <input type="text" name="username" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">FirstName:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="Needs" className="text-info">Needs:</label><br />
                                        <select multiple={true} value={data} onChange={handleChangeNeeds}>
                                            {data && data.map((obj, index) => {
                                                return <option value={index} key={index}>  {obj.content}</option>
                                            }
                                            )}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="Needs" className="text-info">Skills:</label><br />
                                        <select multiple={true} value={data} onChange={handleChangeSkills}>
                                            {data && data.map((obj, index) => {
                                                return <option value={index} key={index}>  {obj.content}</option>
                                            }
                                            )}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-info btn-md">S'inscrire</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
