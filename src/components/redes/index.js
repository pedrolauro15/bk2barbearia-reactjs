import React from "react";
import { FiInstagram } from "react-icons/fi";
import Botao from "../../components/botao";
import "./style.css";

const lista = [
  {
    src:
      "https://i.dailymail.co.uk/i/pix/2011/03/11/article-1365161-0D688C9F000005DC-250_468x618.jpg",
  },
  {
    src:
      "https://i.dailymail.co.uk/i/pix/2011/03/11/article-1365161-0D688C9F000005DC-250_468x618.jpg",
  },
  {
    src:
      "https://i.dailymail.co.uk/i/pix/2011/03/11/article-1365161-0D688C9F000005DC-250_468x618.jpg",
  },
  {
    src:
      "https://i.dailymail.co.uk/i/pix/2011/03/11/article-1365161-0D688C9F000005DC-250_468x618.jpg",
  },
  {
    src:
      "https://i.dailymail.co.uk/i/pix/2011/03/11/article-1365161-0D688C9F000005DC-250_468x618.jpg",
  },
];

function Instagram() {
  return (
    <div id="instagram">
      <h1 id="titulo">INSTAGRAM</h1>
      <hr />

      <h2 id="titulo2">Fotos</h2>

      <ul className="img-list">
        {lista.map((item, i) => (
          <li key={i}>
            <img
              alt="img"
              src={item.src}
              style={{ width: "250px", height: "250px" }}
            />
          </li>
        ))}
      </ul>

      <ul className="img-list">
        {lista.map((item, i) => (
          <li key={i}>
            <img
              alt="img"
              src={item.src}
              style={{ width: "250px", height: "250px" }}
            />
          </li>
        ))}
      </ul>

      <Botao
        title="Ver Mais"
        onClick={() => {
          alert("Clicou");
        }}
        icon={<FiInstagram className="header-icon" />}
      />
    </div>
  );
}
export default Instagram;
