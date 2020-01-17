import React from 'react'
import { StudentConsumer } from '../context'
import EvasionBadge from './EvasionBadge'
import $ from 'jquery'

export default class TabelaAluno extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-group">
          <input id="studentSearch" className="form-control"
            type="search" placeholder="Pesquisar" aria-label="Pesquisar" onKeyUp={() => {
              searchStudent()
            }} />
          <span className="input-group-append">
            <div className="input-group-text bg-transparent"><i className="fa fa-search"></i></div>
          </span>
        </div>

        <ul id="studentsList" className="list-group student-list">
          <StudentConsumer>
            {(state) => {
              return state.students.map(student => {
                return (
                  <li className="list-group-item" key={student.ALUNO} id={student.ALUNO}
                    onClick={() => {
                      activeOnClick(state.students, student.ALUNO);
                      state.setSelected(student);
                    }}>
                    <span className="pull-left text-capitalize">{student.ALUNO}</span>
                    <EvasionBadge evasion={student.EVASAO} />
                  </li>
                )
              })
            }}
          </StudentConsumer>
        </ul>
      </React.Fragment >
    );
  }
}

function activeOnClick(arr, key) {
  arr.forEach(student => {
    document.getElementById(student.ALUNO).classList.remove('active');
  })
  document.getElementById(key).classList.add('active');
}

function searchStudent() {
  var typed = document.getElementById('studentSearch').value.toLowerCase();
  $("#studentsList li").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(typed) > -1)
  });
}