import './Idea.scss';

function Idea({title, details, id, fave, faveIdea, deleteIdea}) {
  return (
    <div className="d-flex flex-column row-sm-4 border-dark">
      <h3>{title}</h3>
      <h6>{details}</h6>
      <button onClick={() => deleteIdea(id)}>X</button>
      <button onClick={() => faveIdea(id)}>{fave ? '♥' : '♡'}</button>
    </div>
  );
}

export default Idea;
