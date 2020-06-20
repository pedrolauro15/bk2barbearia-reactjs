import React from "react";
import { FaUser } from "react-icons/fa";
import Botao from "../../components/botao";
import "./styles.css";

const lista = [
  {
    src:
      "https://static.wixstatic.com/media/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.jpg/v1/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.webp",
  },
  {
    src:
      "https://static.wixstatic.com/media/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.jpg/v1/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.webp",
  },
  {
    src:
      "https://static.wixstatic.com/media/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.jpg/v1/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.webp",
  },
  {
    src:
      "https://static.wixstatic.com/media/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.jpg/v1/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.webp",
  },
  {
    src:
      "https://static.wixstatic.com/media/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.jpg/v1/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/cbfee7_3924da62341640dfa2bc842646da8197~mv2_d_2848_2848_s_4_2.webp",
  },
];

function Sobre() {
  return (
    <div id="sobre">
      <h1 className="titulo">BK2 BARBEARIA</h1>
      <hr />
      <p>
        Fígaro Barbearia é um novo conceito de beleza, saúde e bem-estar voltado
        ao público masculino que está a cada dia mais exigente e atencioso as
        novidades.
        <br />
        A barbearia que preza por um atendimento impecável do começo ao fim da
        sua experiência de corte, barba ou em qualquer um dos mais de 100
        serviços corporais e faciais que a Fígaro oferece, com uma gama de
        produtos selecionados e profissionais qualificados para atender da
        melhor forma possível o homem moderno.
        <br /> É o lugar certo para dar um trato no visual, encontrar amigos ou
        simplesmente relaxar.
      </p>

      <h1 className="titulo2">ESTRUTURA</h1>
      <hr />
      <p>
        A Fígaro Social Club possui uma área de 364m² e é totalmente
        climatizada. O espaço possui um salão principal com seis cadeiras de
        corte e barba, três lavatórios, um bar e espaço para jogos. Além de
        salas reservadas para depilação, estética facial e corporal, tratamento
        capilar, podologia e uma suíte exclusiva para o Dia do Noivão. <br />
        Fígaro Executive, a barbearia que soube aproveitar a conveniência do
        shopping, atende o homem moderno com serviços de cabelo e barba.
        Localizada dentro do RioMar Fortaleza Shopping a sua estrutura é
        composta por seis cadeiras Ferrante clássicas, lavatórios, recepção e
        cervejas sempre geladas. <br /> Uma outra opção é Fígaro Executive Sul,
        que está presente em uma localização privilegiada na Av. Washington
        Soares, no Imperial Open Mall, com novo horário de funcionamento: 10h às
        20h.
      </p>

      <ul className="img-list">
        {lista.map((item, i) => (
          <li key={i}>
            <img alt="img" src={item.src} style={{ width: "150px" }} />{" "}
          </li>
        ))}
      </ul>

      <Botao
        title="Saiba Mais"
        onClick={() => {
          alert("Clicou");
        }}
        icon={<FaUser />}
      />
    </div>
  );
}
export default Sobre;
