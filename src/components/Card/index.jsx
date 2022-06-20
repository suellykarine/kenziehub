import "./style.css";

const Card = ({ info }) => {
  return (
    <ul>
      {info.map((repo, id) => {
        return (
          <li key={id}>
            <div className="div-card">
              <div className="div1">
                <img src={repo.imagem} alt="xx" />
              </div>
              <div>
                <h2>{repo.titulo}</h2>
              </div>
              <div className="div2">
                <h2> {repo.descricao}</h2>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
