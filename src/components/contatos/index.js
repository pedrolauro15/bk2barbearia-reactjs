import React from "react";
import "./styles.css";

function Contatos() {
  return (
    <div id="contatos">
      <section className="left_contatct_section">
        <h2>Endereço</h2>
        <span>Avenida São Vicente de Paula, 1133</span>
        <span>Caucaia-CE</span>

        <h2 style={{ marginTop: 8 }}>Horário de funcionamento</h2>
        <strong>Segunda à sábado:</strong>
        <span>8:00 às 20:00</span>
        <strong>Domingo:</strong>
        <span>9:00 às 12:00</span>
      </section>

      <section className="right_contact_section">
        <h2>Fale conosco</h2>
        <strong>E-Mail:</strong>
        <span>bk2barbeariacontato@gmail.com</span>
        <strong>Telefone:</strong>
        <span>(85) 98909-2227</span>
      </section>
    </div>
  );
}

export default Contatos;
