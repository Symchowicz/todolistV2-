import React, {Component, useState} from "react";
import "./App.css";
import Form from "./Component/Form";
import Title from "./Component/Title";
import Card from "./Component/Card";


export default function App() {

  const [cards, setCards] = useState([]);
  const [nombreSuccess, setNombreSuccess] = useState(0)

  function handleDelete (id) {
    setCards(cards.filter(card => card.id != id));
  }

  function handleSuccess(id, nombreSuccess ){
    if ( document.getElementById(id).classList.contains('isFinish') ){
      document.getElementById(id).classList.remove('isFinish');
      setNombreSuccess(nombreSuccess - 1);
    }else{
      document.getElementById(id).classList.add('isFinish');
      setNombreSuccess(nombreSuccess + 1);
    }
  }

  return(
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="text-center" style={{minWidth: "40em"}}>
        <Title/>
        <Form setCards={setCards} cards={cards} nombreSuccess={nombreSuccess} setNombreSuccess={setNombreSuccess} />
        <div>
        {cards.map(
        card =>(
        <Card titre={card.titre} message={card.message} id={card.id} handleDelete={handleDelete} handleSuccess={handleSuccess} setNombreSuccess={setNombreSuccess} nombreSuccess={nombreSuccess} key={card.id} />
        )
        )}
        </div>
      </div>
    </div>
  );
}