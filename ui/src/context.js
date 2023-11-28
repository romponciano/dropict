import React from 'react'
import { alunos } from './data'
import DataModel from './models/DataModel'
import CenarioModel from './models/CenarioModel'

const StudentContext = React.createContext();
const StudentConsumer = StudentContext.Consumer;

class StudentProvider extends React.Component {
  state = {
    students: getDataStudents(),
    selectedStudent: undefined,
    simulatorStarted: false,
    predictAnwser: undefined,
    simulatorStudent: undefined,
    loadingPrediction: false,
    cenarios: [],
    x: 0,
    y: 0,
    lastAddScenario: 0,
    selectedIA: undefined
  }

  clearAll = () => {
    this.setState(() => {
      return {
        simulatorStarted: false,
        selectedStudent: undefined,
        cenarios: [],
        loadingPrediction: false,
        simulatorStudent: undefined,
        predictAnwser: undefined,
        x: 0,
        y: 0,
        lastAddScenario: 0,
      }
    })
  }

  changeNavbarActive = (page) => {
    document.getElementById("inicio").classList.remove('active');
    document.getElementById("select-student").classList.remove('active')
    document.getElementById("sobre").classList.remove('active');
    document.getElementById("termos").classList.remove('active');
    document.getElementById(page).classList.add('active');
  }

  setSelected = (student) => {
    this.setState(() => {
      return {
        selectedStudent: student
      }
    })
  }

  setSelectedIA = (selected) => {
    this.setState(() => {
      return {
        selectedIA: selected,
        students: this.updateStudents(selected)
      }
    })
  }

  updateStudents = (selected) => {
    if (selected === 'dt') {
      alunos.forEach((item, index) => {
        item.EVASAO = item.Raca === 'negra' ? 'sim' : 'nao'
      })
    }
    return [...alunos];
  }

  updatePosition = () => {
    let tempAdd = this.state.lastAddScenario;
    let tempY = this.state.y
    let tempX = this.state.x + 1
    if (tempX > 2) {
      tempX = 0
      tempY += 1
    }
    this.setState(() => {
      return {
        x: tempX,
        y: tempY,
        lastAddScenario: tempAdd + 1
      }
    })
  }

  saveScenario = () => {
    let cenario = new CenarioModel(
      this.state.lastAddScenario,
      this.state.x,
      this.state.y,
      this.getValuesOfFields(),
      this.state.predictAnwser
    )
    this.state.cenarios.push(cenario)
    this.updatePosition()
  }

  predict = () => {
    this.setState(() => {
      return {
        loadingPrediction: true,
        simulatorStudent: this.getValuesOfFields()
      }
    }, () => {
      this.requestPrediction();
    })
  }

  requestPrediction = () => {
    fetch('https://dropict-model-api.onrender.com/predict', {
      method: 'POST',
      headers: new Headers({
        'Authorization': '!#7Romulo7#!',
        'Content-Type': 'application/json',
        'SelectedIA': this.state.selectedIA
      }),
      body: JSON.stringify(this.state.simulatorStudent.toJson())
    }).then(res => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            predictAnwser: data.predict,
            loadingPrediction: false
          }
        }, () => { this.saveScenario(); })
      }).catch(e => {
        alert(e);
      });
  }

  getValuesOfFields = () => {
    let total_acesso = document.getElementById('login').value
    let forum = document.getElementById('forum').value
    let mod_discussion = document.getElementById('discussao').value
    let nota_alg = document.getElementById('nota_alg').value
    let nota_fdw = document.getElementById('nota_fdw').value
    let nota_fmi = document.getElementById('nota_fmi').value
    let nota_ead = document.getElementById('nota_ead').value
    let nota_mat = document.getElementById('nota_mat').value
    let aux = document.getElementById('idade')
    let idade = aux.options[aux.selectedIndex].value
    aux = document.getElementById('raca')
    let raca = aux.options[aux.selectedIndex].value
    aux = document.getElementById('renda')
    let renda = aux.options[aux.selectedIndex].value
    aux = document.getElementById('sexo')
    let sexo = aux.options[aux.selectedIndex].value
    aux = document.getElementById('e_civil')
    let e_civil = aux.options[aux.selectedIndex].value
    aux = document.getElementById('trabalha')
    let trabalha = aux.options[aux.selectedIndex].value
    aux = document.getElementById('qtd_casa')
    let qtd_casa = aux.options[aux.selectedIndex].value
    aux = document.getElementById('pc_casa')
    let pc_casa = aux.options[aux.selectedIndex].value
    return new DataModel(
      forum, mod_discussion, total_acesso, nota_ead,
      nota_alg, nota_fdw, nota_fmi, nota_mat, sexo,
      idade, e_civil, raca, trabalha, qtd_casa, renda,
      pc_casa
    )
  }

  startSimulator = () => {
    this.setState(() => {
      return {
        simulatorStarted: true
      }
    })
    document.getElementById("mainContainer").classList.add("no-pad")
  }

  render() {
    return (
      <StudentContext.Provider value={{
        ...this.state,
        clearAll: this.clearAll,
        changeNavbarActive: this.changeNavbarActive,
        setSelected: this.setSelected,
        startSimulator: this.startSimulator,
        predict: this.predict,
        removeScenario: this.removeScenario,
        setSelectedIA: this.setSelectedIA
      }}>
        {this.props.children}
      </StudentContext.Provider>
    )
  }
}

function getDataStudents() {
  alunos.forEach((item, index) => {
    item.NOTA_EAD = item.NOTA_EAD / 10.0
    item.NOTA_EAD = item.NOTA_EAD === 1 ? 10.0 : item.NOTA_EAD.toFixed(2)
    item.NOTA_ALG = item.NOTA_ALG / 10.0
    item.NOTA_ALG = item.NOTA_ALG === 1 ? 10.0 : item.NOTA_ALG.toFixed(2)
    item.NOTA_FDW = item.NOTA_FDW / 10.0
    item.NOTA_FDW = item.NOTA_FDW === 1 ? 10.0 : item.NOTA_FDW.toFixed(2)
    item.NOTA_FMI = item.NOTA_FMI / 10.0
    item.NOTA_FMI = item.NOTA_FMI === 1 ? 10.0 : item.NOTA_FMI.toFixed(2)
    item.NOTA_MAT = item.NOTA_MAT / 10.0
    item.NOTA_MAT = item.NOTA_MAT === 1 ? 10.0 : item.NOTA_MAT.toFixed(2)
  })
}

export { StudentProvider, StudentConsumer };