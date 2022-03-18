import { useState } from "react";
import Card from "./Card";

export default function Form({setCards, cards, nombreSuccess, setNombreSuccess}) {

    const [formTitle, setFormTitle] = useState();
    const [formContent, setFormContent] = useState();
    const [counter, setCounter] = useState(0);

    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(cards.length - nombreSuccess <5){
            setCards( 
                previousState => [{titre: formTitle, message: formContent, id : counter}, ...previousState]
            );
        }else{
            alert("Finis d'abord tes autres taches feignasse !!!!")
        }
    }

    return (
        <form className="my-5 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Titre</label>
                <input type="text" className="form-control" placeholder="Titre" onChange={handleTitleChange} />
            </div>
            <div className="mb-3">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Message" onChange={handleContentChange} />
            </div>      
            <button type="submit" className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Submit</button>
        </form>
    )
}