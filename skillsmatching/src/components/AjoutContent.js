import React, { useState, useEffect } from 'react'

export default function AjoutContent(props) {
    const [currentList, setCurrentList] = useState([])
    const [list, setList] = useState([])
    const [selectedlist, setselectedlist] = useState([])
    const [check, setCheck] = useState(false)

    const [message, setMessage] = useState("")

    //const history = useHistory();


    let array1 = []
    let array2 = []
    let typeContent = ""
    typeContent = props.match.params.type

    useEffect(() => {
        if (typeContent === "need") {
            fetch(`http://localhost:8080/getCurrentUser`)
                .then(res => res.json())
                .then(resultat => {
                    console.log("resultat", resultat.needs)
                    setCurrentList(resultat.needs);
                    setMessage("Veuillez cochez la liste des besoins à ajouter")

                })
                .catch(error => console.error(error));



        } else if (typeContent === "skill") {
            fetch(`http://localhost:8080/getCurrentUser`)
                .then(res => res.json())
                .then(resultat => {
                    setCurrentList(resultat.skills)
                    setMessage("Veuillez cochez la liste des compétences à ajouter")


                }, [currentList])
                .catch(error => console.error(error));
        }
    }, [])
    useEffect(() => {
        //  if (typeContent === "need") {
        fetch(`http://localhost:8080/getAllNeeds`)
            .then(res => res.json())
            .then(resultat => {
                setList(resultat.list_of_needs)



            })
            .catch(error => console.error(error));


    }, [])



    const handleChange = (event) => {
        let isChecked = event.target.checked;
        setCheck(isChecked)
        let item = event.target.value;
        let id = event.target.id
        let tab = []
        if (isChecked) {
            console.log("checked", isChecked)

            tab = [...selectedlist]
            tab.push({ "id": id, "content": item });


        } else {
            tab.pop()
        }
        setselectedlist(tab)
        console.log("selectedlist", selectedlist)

    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedlist)
    };
    const handleSubmit = (e) => {
        if (typeContent === "need") {

            fetch(`http://localhost:8080/addNeed`, requestOptions)
                .then(response => response.json())
                .then(data => console.log("data", data));


        } else if (typeContent === "skill") {
            fetch(`http://localhost:8080/addSkill`, requestOptions)
                .then(response => response.json())
                .then(data => console.log("data", data));

        }
        props.history.push('/currentuser')

    }




    return (
        <>
            <form className="form-group" >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3>  {message}</h3>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">

                            {currentList && currentList.map(elem => {
                                array1.push(elem.content)
                            }),

                                list && list.filter(item => {
                                    return array1.indexOf(item.content) == -1
                                })
                                    // array2.filter(val => !array1.includes(val))

                                    .map(item => {
                                        return (
                                            <ol>
                                                < label >
                                                    <input
                                                        id={item.id}
                                                        type="checkbox"
                                                        value={item.content}
                                                        onChange={handleChange}
                                                    /> {item.content}
                                                </label>
                                            </ol>)
                                    })



                            }



                            <button type="button" name="Modifier" className="btn btn-info" onClick={handleSubmit}>Ajouter
                                </button>




                        </div>

                    </div>

                </div>
            </form>

        </>

    )




}

