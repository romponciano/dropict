import React from 'react'
import { StudentConsumer } from '../context'
import $ from 'jquery'

export default class SelectedIaBadge extends React.Component {
  componentDidMount() {
    activeTooltips();
  }

  render() {
    return (
      <StudentConsumer>
        {(state) => {
          return (
            <React.Fragment>
              {(state.selectedIA === 'knn') && (
                <img src={"img/knn-static.png"} width="50px" height="50px" alt="knn"
                  data-toggle="tooltip" data-placement="right" title="Analista de Decisão"
                />
              )}
              {(state.selectedIA === 'dt') && (
                <img src={"img/dt-static.png"} width="50px" height="50px" alt="dt"
                  data-toggle="tooltip" data-placement="right" title="Árvore de Decisão"
                />
              )}
              {(state.selectedIA === 'dnn') && (
                <img src={"img/dnn-static.png"} width="50px" height="50px" alt="dnn"
                  data-toggle="tooltip" data-placement="right" title="Rede Neural"
                />
              )}
            </React.Fragment>
          )
        }}
      </StudentConsumer>
    )
  }
}

function activeTooltips() {
  $('[data-toggle="tooltip"]').tooltip()
}