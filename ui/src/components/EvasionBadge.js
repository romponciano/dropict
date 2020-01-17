import React from 'react'

export default function EvasionBadge({ evasion }) {
  return (
    <React.Fragment>
      {(evasion === 'sim') && (
        <span className="pull-right badge badge-danger badge-pill text-uppercase">
          {evasion}
        </span>
      )}
      {(evasion === 'nao') && (
        <span className="pull-right badge badge-dark badge-pill text-uppercase">
          {evasion}
        </span>
      )}
    </React.Fragment>
  )
}