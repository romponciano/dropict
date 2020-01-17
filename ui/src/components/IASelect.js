import React from 'react'
import $ from 'jquery'
import { StudentConsumer } from '../context'
import { Link } from 'react-router-dom'

export default class IASelect extends React.Component {

  constructor(props) {
    super(props)
    this.selected = props.selected
  }

  componentDidMount() {
    selectIA(this.selected)
    $("#knn-gif").addClass("hidden"); $("#knn-png").removeClass("hidden");
    $("#dt-gif").addClass("hidden"); $("#dt-png").removeClass("hidden");
    $("#dnn-gif").addClass("hidden"); $("#dnn-png").removeClass("hidden");
  }

  render() {
    return (
      <StudentConsumer>
        {(state) => {
          return (
            <div className="row pricing h-100 w-100 p-3">
              <div className="col d-flex align-items-stretch">
                <Link to="/select-student" onClick={() => state.changeNavbarActive('select-student')} style={{ textDecoration: 'none', color: 'black' }}>
                  <div id="knn-card" className="card mb-5 mb-lg-0" onClick={() => { selectIA('knn'); state.setSelectedIA('knn') }}
                    onMouseOver={() => { $("#knn-png").addClass("hidden"); $("#knn-gif").removeClass("hidden"); }}
                    onMouseOut={() => { $("#knn-gif").addClass("hidden"); $("#knn-png").removeClass("hidden"); }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-uppercase text-center">Analista de Vizinhança</h5>
                      <h6 className="card-price text-center">
                        <img id="knn-png" width="200px" height="200px" src="img/knn-static.png" alt="knn" />
                        <img id="knn-gif" width="200px" height="200px" src="img/knn-animated.gif" alt="knn" />
                      </h6>
                      <hr></hr>
                      <p>Olá! Eu sou o Analista de Vizinhança! Para fazer minhas predições eu avalio o quanto um estudante é parecido com outros estudantes. Baseado nessa semelhança eu vejo em qual grupo o estudante se encaixa melhor.</p>
                      <p><strong>Eu costumo acertar em 81.03% dos casos!</strong></p>
                    </div>
                    <div id="knn-bar" className="card-footer p-0 m-0" style={{ height: "15px" }}></div>
                  </div>
                </Link>
              </div>

              <div className="col d-flex align-items-stretch">
              <Link to="/select-student" onClick={() => state.changeNavbarActive('select-student')} style={{ textDecoration: 'none', color: 'black' }}>
                  <div id="dt-card" className="card mb-5 mb-lg-0" onClick={() => { selectIA('dt'); state.setSelectedIA('dt') }}
                    onMouseOver={() => { $("#dt-png").addClass("hidden"); $("#dt-gif").removeClass("hidden"); }}
                    onMouseOut={() => { $("#dt-gif").addClass("hidden"); $("#dt-png").removeClass("hidden"); }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-uppercase text-center">Árvore de Decisão</h5>
                      <h6 className="card-price text-center">
                        <img id="dt-png" width="200px" height="200px" src="img/dt-static.png" alt="dt" />
                        <img id="dt-gif" width="200px" height="200px" src="img/dt-animated.gif" alt="dt" />
                      </h6>
                      <hr></hr>
                      <p>Olá! Eu sou a Árvore de Decisão! Para fazer minhas predições eu avalio algumas características que considero mais importante e, a partir dessa análise, escolho diferentes caminhos para chegar na minha decisão final.</p>
                      <p><strong>Eu costumo acertar em 79.46% dos casos!</strong></p>
                    </div>
                    <div id="dt-bar" className="card-footer p-0 m-0" style={{ height: "15px" }}></div>
                  </div>
                </Link>
              </div>

              <div className="col d-flex align-items-stretch">
              <Link to="/select-student" onClick={() => state.changeNavbarActive('select-student')} style={{ textDecoration: 'none', color: 'black' }}>
                  <div id="dnn-card" className="card mb-5 mb-lg-0" onClick={() => { selectIA('dnn'); state.setSelectedIA('dnn') }}
                    onMouseOver={() => { $("#dnn-png").addClass("hidden"); $("#dnn-gif").removeClass("hidden"); }}
                    onMouseOut={() => { $("#dnn-gif").addClass("hidden"); $("#dnn-png").removeClass("hidden"); }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-uppercase text-center">Rede Neural</h5>
                      <h6 className="card-price text-center">
                        <img id="dnn-png" width="200px" height="200px" src="img/dnn-static.png" alt="dnn" />
                        <img id="dnn-gif" width="200px" height="200px" src="img/dnn-animated.gif" alt="dnn" />
                      </h6>
                      <hr></hr>
                      <p>Olá! Eu sou a Rede Neural! Para realizar minhas predições eu utilizo neurônicos capazes de realizar análises estatísticas que me ajudam a encontrar o resultado mais provável para um determinado estudante.</p>
                      <p><strong>Eu costumo acertar em 84.71% dos casos!</strong></p>
                    </div>
                    <div id="dnn-bar" className="card-footer p-0 m-0" style={{ height: "15px" }}></div>
                  </div>
                </Link>
              </div>
            </div>
          )
        }}
      </StudentConsumer>
    );
  }
}

function selectIA(selected) {
  if (selected) {
    document.getElementById("knn-card").classList.remove('border', 'border-primary')
    document.getElementById("dt-card").classList.remove('border', 'border-primary')
    document.getElementById("dnn-card").classList.remove('border', 'border-primary')
    document.getElementById(selected + "-card").classList.add('border', 'border-primary')

    document.getElementById("knn-bar").classList.remove('bg-primary')
    document.getElementById("dt-bar").classList.remove('bg-primary')
    document.getElementById("dnn-bar").classList.remove('bg-primary')
    document.getElementById(selected + "-bar").classList.add('bg-primary')
  }
}