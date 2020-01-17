import React from 'react'
import {DualRing} from 'react-awesome-spinners'

export default function LoadingSpinner() {
  return (
    <React.Fragment>
      <span className="pull-right text-center m-0 p-0"><DualRing size="40" color="#000000" /></span> 
    </React.Fragment>
  )
}