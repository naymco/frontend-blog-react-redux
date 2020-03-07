import React, { Component } from "react";
import { connect } from "react-redux";

// Componentes
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import "../css/GeneralCss.css";
import fotoCurriculum from "../css/img/fotoCurriculum.jpg";

// Redux actions
import { getJsonView } from "../redux/actions";

class Home extends Component {
  componentDidMount() {
    getJsonView();
  }
  render() {
    console.log(this.props);
    return (
      <div className="container-home">
        <Navbar />
        <Header />
        <div className="container-saludo">
          <img
            className="foto-curriculum"
            src={fotoCurriculum}
            alt="foto curriculum"
          />
          <h2> Mis objetivos: ¿Qué estoy buscando?</h2>
          <p>
            Mis objetivos para este año 2020 y espero que también para los
            siguientes venideros, es convertime en desarrollador profesional,
            ganandome con ello la experiencia que tanto necesito ahora mismo
            para comenzar con mi sueño.
          </p>

          <p>
            Soy serio, responsable, trabajador, autodidacta y siempre tengo
            curiosidad, paciencia y motivación diaria para comenzar a
            desarrollar todo el día.
          </p>
          <p>
            En estos 3 meses incluso desde antes, como medio año atrás comencé a
            aprender por mi cuenta diferentes tecnologías que consideraba
            básicas para empezar en el mundo del desarrollo de aplicaciones, así
            que al ver que era lo mío, que me sentía completo cuando comencé a
            realizar algunos tutoriales y sentí que crear algo desde cero, como
            es en el desarrollo web, hizo que me enamorara de este mundo.
          </p>
          <p>
            Sin duda es a lo que deseo dedicarme el resto de mi vida, porque
            siento que podría llegar a crear cosas verdaderamente interesantes.
            O eso es lo que quiero pensar.
          </p>
        </div>
        <div className="block-estudios">
          <h3> Estudios: ¿Qué se me da bien?</h3>
          {this.props.view.map(data => {
            console.log(data);
            return (
              <div key={data.title} className="block-hability">
                <span> {data.title} </span>
                <img className="logo-html" src={data.image} alt={data.title} />
                <p> {data.description} </p>
                <p>Enlaces de los proyectos, </p>{" "}
                <p>
                  para el front: {""}
                  <a href={data.link.front}> Ver proyecto en GitHub</a>
                </p>
                <p>
                  para el back:
                  <a href={data.link.back}>
                    {""} Ver proyecto en GitHub (no todos los proyectos
                    contienen backend ){" "}
                  </a>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    view: state.jhome.jhome
  };
}

export default connect(mapStateToProps)(Home);
