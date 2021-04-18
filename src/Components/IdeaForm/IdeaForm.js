import './IdeaForm.scss';
import React, { useState } from 'react';


function IdeaForm({addIdea}) {

  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDetails, setIdeaDetails] = useState("");

  const submitIdea = (event) => {
    event.preventDefault();
    if(ideaTitle !== " " && ideaDetails.length !== " ") {
      let newIdea = {id: Date.now(), title: capitalize(ideaTitle), details: ideaDetails, fave: false}
      addIdea(newIdea)
      clearInputs()
    } else {
      alert('Please provide more information about your idea before you can submit!')
    }
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  };

  const clearInputs = () => {
    setIdeaTitle("")
    setIdeaDetails("")
  }


  return (
    <div className="row-lg-12 align-center">
      <form onSubmit={event => submitIdea(event)}>
        <div className="row p-2 justify-content-center">
          <input required value={ideaTitle} onChange={event => setIdeaTitle(event.target.value)} placeholder="Idea Title" className="col-lg-5 col-md-6 col-sm-12 border-dark rounded" type="text"/>
        </div>
        <div className="row p-2 justify-content-center">
          <textarea required value={ideaDetails} style={{resize: "none", height: "100px", border: "2px black solid", rows: "90", cols:"50"}} onChange={event => setIdeaDetails(event.target.value)} placeholder="Idea Details" className="col-lg-8 col-md-10 col-sm-12 border-dark rounded" type="text"/>
        </div>
        <div className="row p-2 justify-content-center">
          <button className="col-lg-2 col-md-4 col-sm-12 m-2 btn-primary col-sm-3">submit</button>
        </div>
      </form>
    </div>
  );
}

export default IdeaForm;
