import React from "react";
import { FaInstagram, FaUsers } from "react-icons/fa";
import {
  GiBalloons,
  GiBeard,
  GiCalendar,
  GiPerspectiveDiceSixFacesRandom,
  GiPodium,
} from "react-icons/gi";
import "./styles.css";

const lista = [
  {
    title: "Completão",
    icon: <GiBeard />,
    text:
      "A cada 3 cortes de cabelo ganhe 1 serviço completo: corte + barba + sobrancelha...",
  },
  {
    title: "Aniversáriante",
    icon: <GiBalloons />,
    text:
      "No mês do seu aniversário você terá direito `a um dos serviços grátis. Podendo ser corte, barba, sobrancelha, etc...",
  },
  {
    title: "Indicação",
    icon: <FaUsers />,
    text: "A cada três pessoas indicadas ganhe um corte de cabelo grátis",
  },
  {
    title: "Ranking",
    icon: <GiPodium />,
    text:
      "Cada corte com promoção vale 1 ponto no ranking BK2; O cliente que terminar o ano em primeiro lugar é vencedor no seu estilo de corte; Ao vencer, o cliente ganha um cupom para depositar na urna e concorrer aos 12 prêmios no final do ano",
  },
  {
    title: "Sorteio do isntagram",
    icon: <FaInstagram />,
    text:
      "Todo cliente cadastrado que segue a BK2 Barbearia no instagram concorre, todo mês, à um corte grátis",
  },
  {
    title: "Sorteio mensal",
    icon: <GiCalendar />,
    text:
      "Toda pessoa que cortar no mês marca um ponto em uma lista e, no final do mês, será sorteado um corte grátis com os nomes dessa lista",
  },
  {
    title: "Sorteio anual",
    icon: <GiPerspectiveDiceSixFacesRandom />,
    text:
      "A cada 12 carimbos ganhe 1 cupom e deposite na urna para concorrer à 12 prêmios",
  },
];

function Promo() {
  return (
    <div id="promo" className="teste">
      <h1>PROMOÇÕES</h1>
      <hr />

      <div id="promo_container">
        {lista.map((item, index) => (
          <div key={index} id="promocao">
            <div className="icone_container">{item.icon}</div>

            <div className="text_container">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Promo;
