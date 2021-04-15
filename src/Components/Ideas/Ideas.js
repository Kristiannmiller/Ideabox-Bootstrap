import './Ideas.scss';
import Idea from '../Idea/Idea';


function Ideas({ideas, faveIdea, deleteIdea}) {

  const displayIdeas = () => {
    return ideas.map(idea => {
      return (
        <Idea
          key={idea.id}
          title={idea.title}
          details={idea.details}
          id={idea.id}
          fave={idea.fave}
          faveIdea={faveIdea}
          deleteIdea={deleteIdea}
        />
      )
    })
  }

  return (
    <div className="d-flex row-lg-12">
      {displayIdeas()}
    </div>
  );
}

export default Ideas;
