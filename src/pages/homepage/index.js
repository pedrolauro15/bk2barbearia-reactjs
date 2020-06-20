import React from "react";
import Contatos from "../../components/contatos";
import Footer from "../../components/footer";
import HomeHeader from "../../components/homeHeader";
import Redes from "../../components/redes";
import Servicos from "../../components/servicos";
import Sobre from "../../components/sobre";
import "./styles.css";

function Homepage() {
  return (
    <div id="homepage">
      <HomeHeader id_sobre="#sobre" />
      <Sobre />
      <Servicos />
      <Redes />
      {/*<div
        style={{
          display: "flex",
          width: 500,
          height: 500,
        }}
      >
        {/*<Map center={[-1.45, 3.5]} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-1.45, 3.5]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </Map>}
      </div>*/}
      <Contatos />
      <Footer />
    </div>
  );
}

export default Homepage;
