import './App.scss';
import IdeaForm from '../IdeaForm/IdeaForm';

function App() {
  return (
    <div className="p-5 d-flex flex-column">
      <div className="row">
        <h1 class="p-2 col-sm-12">What a Lovely Idea!</h1>
      </div>
      <IdeaForm
        addIdea= {addIdea} />
    </div>
  );
}

export default App;
