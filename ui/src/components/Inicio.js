import React from 'react'
import { StudentConsumer } from '../context'
import TabelaAlunos from './TabelaAlunos'
import DadosAluno from './DadosAluno'
import DadosAlunoEncolhido from './DadosAlunoEncolhido'
import Simulador from './Simulador'
import Cenarios from './Cenarios'
import IASelect from './IASelect'
import SelectedIaBadge from './SelectedIaBadge'

export default class Inicio extends React.Component {
  render() {
    return (
      <StudentConsumer>
        {(state) => {
          return (
            <React.Fragment>
              {(!state.selectedIA) && (
                <IASelect />
              )}
              <div id="mainContainer" className="limit-viewport container h-100 w-100">
                <div className="row m-0">
                  {(!state.simulatorStarted && state.selectedIA) && (
                    <div className="col-lg-3 border-div limit-height">
                      <TabelaAlunos />
                    </div>
                  )}

                  {(!state.simulatorStarted && !state.selectedStudent && state.selectedIA) && (
                    <div className="col border-div limit-height">
                      <SelectedIaBadge />
                      <br></br><br></br><br></br><br></br><br></br>
                      <h2 className="text-center">
                        Selecione um estudante para visualizar suas informações<br />
                        ou<br />
                        clique no Início para selecionar outra IA
                    </h2>
                    </div>
                  )}

                  {(!state.simulatorStarted && state.selectedStudent && state.selectedIA) && (
                    <div className="col border-div mr-2 limit-height">
                      <DadosAluno />
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <button type="button" className="btn btn-primary flex-grow-1"
                          onClick={() => { state.startSimulator() }}>
                          Iniciar simulador
                      </button>
                      </div>
                    </div>
                  )}

                  {(state.simulatorStarted && state.selectedStudent && state.selectedIA) && (
                    <div className="col">
                      <div className="row">
                        <div className="col-lg-4 border-div limit-height">
                          <DadosAlunoEncolhido />
                        </div>
                        <div className="col-lg-3 border-div">
                          <Simulador />
                        </div>
                        <div className="col border-div limit-height">
                          <Cenarios cenas={state.cenarios} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </StudentConsumer>
    )
  }
}