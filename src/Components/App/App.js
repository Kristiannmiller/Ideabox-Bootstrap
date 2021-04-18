import './App.scss';
import IdeaForm from '../IdeaForm/IdeaForm';
import Ideas from '../Ideas/Ideas';
import React, { useState } from 'react';

function App() {
  const [currentIdeas, setCurrentIdeas] = useState([]);

  const addIdea = (idea) => {
    setCurrentIdeas([...currentIdeas, idea])
  }

  const alphabetize = (ideas) => {
    return ideas.sort((a, b) => {
      if(a.title < b.title) {
        return -1
      }
      if(a.title > b.title) {
        return 1
      }
    })
  }

  const faveIdea = (id) => {
    let otherIdeas = currentIdeas.filter(idea => idea.id !== id)
    let ideaToChange = currentIdeas.find(idea => idea.id === id)
    ideaToChange.fave = !ideaToChange.fave
    setCurrentIdeas([...otherIdeas, ideaToChange])
  }

  const deleteIdea = (id) => {
    let otherIdeas = currentIdeas.filter(idea => idea.id !== id)
    setCurrentIdeas([...otherIdeas])
  }

  return (
    <div className="p-5 d-flex flex-column">
      <div className="row">
        <h1 className="p-2 col-sm-12">What a Lovely Idea!</h1>
      </div>
      <div className="container">
        <IdeaForm
          addIdea= {addIdea} />
      </div>
      <div className="container-fluid">
        <Ideas
          ideas= {alphabetize(currentIdeas)}
          faveIdea= {faveIdea}
          deleteIdea={deleteIdea} />
      </div>
    </div>
  );
}

export default App;
