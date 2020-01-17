import React from 'react'
import { Link } from 'react-router-dom'
import { StudentConsumer } from '../context'

export default class Navbar extends React.Component {
  render() {
    return (
      <StudentConsumer>
        {(state) => {
          return (
            <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
              <Link to='/' className="navbar-brand" onClick={() => { state.changeNavbarActive('inicio'); state.clearAll() }}>
                Dropict
              </Link>
              <button type="button" className="navbar-toggler"
                data-toggle="collapse" data-target="#collapseMenu"
                aria-controls="collapseMenu" aria-label="Toggle menu">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="collapseMenu">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active" id="inicio" onClick={() => { state.changeNavbarActive('inicio') }}>
                    <Link to='/' className="nav-link" onClick={() => { state.clearAll() }}>
                      Início <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item" id="select-student" onClick={() => { state.changeNavbarActive('select-student') }}>
                    <Link to='/select-student' className="nav-link">Selecionar Estudante</Link>
                  </li>
                  <li className="nav-item" id="sobre" onClick={() => { state.changeNavbarActive('sobre') }}>
                    <Link to='/sobre' className="nav-link">Sobre</Link>
                  </li>
                  <li className="nav-item" id="termos" onClick={() => { state.changeNavbarActive('termos') }}>
                    <Link to='/termos' className="nav-link">Termos de Condição</Link>
                  </li>
                </ul>
              </div>
            </nav>
          )
        }}
      </StudentConsumer>
    )
  }
}