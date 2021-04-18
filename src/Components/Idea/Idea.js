import './Idea.scss';

function Idea({title, details, id, fave, faveIdea, deleteIdea}) {
  return (
    <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3 pb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
            <p className="card-text">{details}</p>
            <button className="btn btn-outline-primary m-2 w-20" onClick={() => deleteIdea(id)}>X</button>
            {fave ? <button className="btn btn-primary m-2" onClick={() => faveIdea(id)}>♥</button> : <button className="btn btn-outline-primary m-2" onClick={() => faveIdea(id)}>♡</button>}
        </div>
      </div>
    </div>
  );
}

export default Idea;
