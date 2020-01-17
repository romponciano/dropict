import React from 'react'
import { StudentConsumer } from '../context'
import EvasionBadge from './EvasionBadge'
import LoadingSpinner from './LoadingSpinner'
import ScenaryAttributes from './ScenaryAttributes'
import SelectedIaBadge from './SelectedIaBadge'

export default class Simulador extends React.Component {
  render() {
    return (
      <StudentConsumer>
        {(state) => {
          return (
            <React.Fragment>
              <div className="row">
                <div className="col-12">
                  <h3>
                    <SelectedIaBadge /> Simulador:
                    {(state.loadingPrediction) && (
                      <LoadingSpinner />
                    )}
                    {(!state.loadingPrediction) && (
                      <EvasionBadge evasion={state.predictAnwser} />)}
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <form>
                    <ScenaryAttributes disabled={false} student={state.selectedStudent} idPrefix={''} />
                    {/* ################# BOTÕES DE CONTROLE ################# */}
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <button type="button" className="btn btn-success"
                          disabled={state.loadingPrediction}
                          onClick={() => { state.predict() }}>
                          Realizar Predição
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </React.Fragment>
          )
        }
        }
      </StudentConsumer >
    )
  }
}