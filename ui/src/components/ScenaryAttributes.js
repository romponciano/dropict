import React from 'react'
import Attribute from './Attribute'

export default class ScenaryAttributes extends React.Component {
  constructor(props) {
    super(props)
    this.disabled = props.disabled
    this.student = props.student
    this.idPrefix = props.idPrefix
  }

  componentDidMount() {
    if (this.disabled) {
      let inputs = getElementsByIdStartsWith('input', this.idPrefix);
      for (let idx = 0; idx < inputs.length; idx++) {
        inputs[idx].disabled = true
      }
      let selects = getElementsByIdStartsWith('select', this.idPrefix);
      for (let idx = 0; idx < selects.length; idx++) {
        selects[idx].disabled = true
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* ################# ACESSOS ################# */}
        <div className="form-group row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <Attribute header='Login' body={(
                <input type="number" className="form-control" id={this.idPrefix + "login"} min="0" max="5000" placeholder="Login" maxLength="5" minLength="1" step="1" defaultValue={this.student.TOTAL_ACESSO} />
              )} />
              <Attribute header='Fórum' body={(
                <input type="number" className="form-control" id={this.idPrefix + "forum"} min="0" max="5000" placeholder="Fórum" maxLength="5" minLength="1" step="1" defaultValue={this.student.FORUM} />
              )} />
              <Attribute header='Discussão' body={(
                <input type="number" className="form-control" id={this.idPrefix + "discussao"} min="0" max="5000" placeholder="Discussão" maxLength="5" minLength="1" step="1" defaultValue={this.student.MOD_DISCUSSION} />
              )} />
            </div>
          </div>
        </div>
        {/* ################# NOTAS ################# */}
        <div className="form-group row">
          <div className="col-sm-12">
            <div className="d-flex justify-content-between">
              <Attribute header='ALG' body={(
                <input type="decimal" className="form-control" id={this.idPrefix + "nota_alg"} min="0" max="10" placeholder="ALG" maxLength="5" minLength="1" step="0.1" defaultValue={this.student.NOTA_ALG} />
              )} />
              <Attribute header='FDW' body={(
                <input type="decimal" className="form-control" id={this.idPrefix + "nota_fdw"} min="0" max="10" placeholder="FDW" maxLength="5" minLength="1" step="0.1" defaultValue={this.student.NOTA_FDW} />
              )} />
              <Attribute header='FDW' body={(
                <input type="decimal" className="form-control" id={this.idPrefix + "nota_fmi"} min="0" max="10" placeholder="FMI" maxLength="5" minLength="1" step="0.1" defaultValue={this.student.NOTA_FMI} />
              )} />
              <Attribute header='EAD' body={(
                <input type="decimal" className="form-control" id={this.idPrefix + "nota_ead"} min="0" max="10" placeholder="EAD" maxLength="5" minLength="1" step="0.1" defaultValue={this.student.NOTA_EAD} />
              )} />
              <Attribute header='MAT' body={(
                <input type="decimal" className="form-control" id={this.idPrefix + "nota_mat"} min="0" max="10" placeholder="MAT" maxLength="5" minLength="1" step="0.1" defaultValue={this.student.NOTA_MAT} />
              )} />
            </div>
          </div>
        </div>
        {/* ################# DADOS DEMOGRÁFICOS ################# */}
        <div className="form-group row">
          <div className="col-sm-12">
            <Attribute header={'Dados Demográficos'} body={(
              <React.Fragment>
                <div className="row">
                  <div className="col-sm-7">
                    <select className="custom-select" defaultValue={this.student.Idade} id={this.idPrefix + "idade"}>
                      <option value="-1" disabled>Idade</option>
                      <option value="menor18">Menor que 18</option>
                      <option value="18-22">Entre 18 e 22</option>
                      <option value="23-27">Entre 23 e 27</option>
                      <option value="28-32">Entre 28 e 32</option>
                      <option value="maior32">Mais de 32</option>
                    </select>
                  </div>
                  <div className="col-sm-5">
                    <select className="custom-select" defaultValue={this.student.Raca} id={this.idPrefix + "raca"}>
                      <option value="-1" disabled>Raça</option>
                      <option value="branca">Branca</option>
                      <option value="indigena">Indígena</option>
                      <option value="mestica">Mestiça</option>
                      <option value="negra">Negra</option>
                      <option value="outra">Outra</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-7">
                    <select className="custom-select" defaultValue={this.student.Renda_Familiar} id={this.idPrefix + "renda"}>
                      <option value="-1" className="select-invalid-defaultValue" disabled>Renda familiar</option>
                      <option value="950_1425">Entre R$950 e R$1425</option>
                      <option value="1426_2375">Entre R$1426 e R$2375</option>
                      <option value="2376_2999">Entre R$2376 e R$2999</option>
                      <option value="maior3000">Acima de R$3000</option>
                    </select>
                  </div>
                  <div className="col-sm-5">
                    <select className="custom-select" defaultValue={this.student.Sexo} id={this.idPrefix + "sexo"}>
                      <option value="-1" disabled>Sexo</option>
                      <option value="feminino">Feminino</option>
                      <option value="masculino">Masculino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-7">
                    <select className="custom-select" defaultValue={this.student.E_Civil} id={this.idPrefix + "e_civil"}>
                      <option value="-1" disabled>Estado Civil</option>
                      <option value="casado">Casado</option>
                      <option value="divorciado">Divorciado</option>
                      <option value="mora_junto">Mora junto</option>
                      <option value="separado">Separado</option>
                      <option value="solteiro">Solteiro</option>
                      <option value="viuvo">Viúvo</option>
                    </select>
                  </div>
                  <div className="col-sm-5">
                    <select className="custom-select" defaultValue={this.student.trabalha} id={this.idPrefix + "trabalha"}>
                      <option value="-1" disabled>Trabalha</option>
                      <option value="nao">Não</option>
                      <option value="integral">Integral</option>
                      <option value="parcial">Parcial</option>
                      <option value="eventual">Eventual</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-7">
                    <select className="custom-select" defaultValue={this.student.qtde_resid_casa} id={this.idPrefix + "qtd_casa"}>
                      <option value="-1" disabled>Mora com</option>
                      <option value="0">0 pessoas</option>
                      <option value="1">1 pessoa</option>
                      <option value="2">2 pessoas</option>
                      <option value="3">3 pessoas</option>
                      <option value="4">4 pessoas</option>
                      <option value="5">mais de 4</option>
                    </select>
                  </div>
                  <div className="col-sm-5">
                    <select className="custom-select" defaultValue={this.student.PC_Casa} id={this.idPrefix + "pc_casa"}>
                      <option value="-1" disabled>Possui PC</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                </div>
              </React.Fragment>
            )}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function getElementsByIdStartsWith(selectorTag, prefix) {
  var items = [];
  var elements = document.getElementsByTagName(selectorTag);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id.lastIndexOf(prefix, 0) === 0) {
      items.push(elements[i]);
    }
  }
  return items;
}