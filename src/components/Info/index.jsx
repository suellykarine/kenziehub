import { useState } from "react";
import axios from "axios";
import Card from "../Card";
import "./style.css";

const Info = () => {
  const [pesquisa, setPesquisa] = useState("");
  const [info, setInfo] = useState([]);
  const [erro, setErro] = useState("");

  const btnPesquisar = () => {
    if (pesquisa === "") {
      setErro("Campo vazio");
      setInfo([]);
    } else {
      axios
        .get(" https://api.github.com/repos/" + pesquisa)
        .then((response) => {
          const informacoes = {
            imagem: response.data.owner.avatar_url,
            descricao: response.data.description,
            titulo: response.data.full_name,
          };

          setInfo([...info, informacoes]);
          setPesquisa("");
          setErro("");
        })
        .catch((err) => {
          if (err.response.data.message === "Not Found") {
            setErro("Erro na busca do repositório");
            setInfo([]);
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="div-input">
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <button onClick={btnPesquisar}>Pesquisar</button>
        <h3> Ex: nome-do-usuário/repositório</h3>
      </div>

      <div className="testediv">
        {info.length === 0 ? (
          <div className="div-erros">
            <span>{erro}</span>
          </div>
        ) : (
          false
        )}

        {info.length !== 0 ? <Card info={info} /> : false}
      </div>
    </div>
  );
};

export default Info;
