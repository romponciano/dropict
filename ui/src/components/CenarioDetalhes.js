import React from 'react'
import EvasionBadge from './EvasionBadge'
import ScenaryAttributes from './ScenaryAttributes'

export default function CenarioDetalhes({ cenario }) {
  return (
    <React.Fragment>
      <div className="modal-header p-1">
        <h3 className="w-100">
          {"Cenário #" + cenario.id} <EvasionBadge evasion={cenario.prediction} />
        </h3>
      </div>
      <div className="modal-body">
        <div className="container p-0">
          <div className="row m-0">
            <div className="col-12 p-0">
                <ScenaryAttributes disabled={true} student={cenario.student} idPrefix={'cenario-'} />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer p-0">
        <button className="btn btn-outline-danger" data-dismiss="modal">Close</button>
      </div>
    </React.Fragment>
  )
}