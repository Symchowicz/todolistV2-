import React from "react"

export default function Card({titre,message,id, handleDelete, handleSuccess, setNombreSuccess, nombreSuccess}){

    return (
        <div className="col">
            <div id={id} className="card">
                <div className="card-body">
                    <h5 className="card-title">{titre}</h5>
                    <p className="card-text">{message}</p>
                </div>
                <p>{nombreSuccess}</p>
                <div className="d-flex">
                    <button className="btn btn-success w-50" onClick={() => handleSuccess(id,nombreSuccess, setNombreSuccess)}>Success</button>
                    <button className="btn btn-danger w-50" onClick={() => handleDelete(id)}>Delete</button>
                </div>               
            </div>
        </div>
    )
}