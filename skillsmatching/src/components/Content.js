import React from 'react'
import { Link } from "react-router-dom";

export default function content(props) {
    return (
        <div className="row">
            <div className="col-2">
                <Link to={`/modifier/${props.type}&${props.data.id}`}>
                    <i className="large material-icons text-info">edit</i>
                </Link>
            </div>
            <div className="col-2">
                <Link to={`/supprimer/${props.data.id}&${props.type}`}>
                    <i className="large material-icons text-info">delete</i>
                </Link>
            </div >
            <div className="col-8">
                {props.data.content}
            </div>

        </div >
    )
}
