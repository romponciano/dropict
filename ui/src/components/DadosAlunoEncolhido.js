import React from 'react'
import { StudentConsumer } from '../context'
import EvasionBadge from './EvasionBadge'
import Attribute from './Attribute'
import { Link } from 'react-router-dom'

export default class DadosAlunoEncolhido extends React.Component {
  render() {
    return (
      <StudentConsumer>
        {(state) => {
          if (state.selectedStudent) {
            return (
              <React.Fragment>
                <div className="row">
                  <div className="col-12">
                    <Link to="/select-student" className="pull-left mr-4">
                      <button type="button" className="btn btn-primary"
                        onClick={() => { state.clearAll(); state.changeNavbarActive('select-student') }}>
                        <i className="fa fa-arrow-left" />
                      </button>
                    </Link>
                    <h3>{state.selectedStudent.ALUNO}: <EvasionBadge evasion={state.selectedStudent.EVASAO} /></h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <form>
                      {/* ################# ACESSOS ################# */}
                      <div className="form-group row">
                        <div className="col-md-12">
                          <div className="d-flex justify-content-between">
                            <Attribute header='Login' body={(
                              <input type="number" className="form-control" id="original_login" min="0" max="5000" placeholder="Login" maxLength="5" minLength="1" step="1" disabled value={state.selectedStudent.TOTAL_ACESSO} />
                            )} />
                            <Attribute header='Fórum' body={(
                              <input type="number" className="form-control" id="original_forum" min="0" max="5000" placeholder="Fórum" maxLength="5" minLength="1" step="1" disabled value={state.selectedStudent.FORUM} />
                            )} />
                            <Attribute header='Discussão' body={(
                              <input type="number" className="form-control" id="original_discussao" min="0" max="5000" placeholder="Discussão" maxLength="5" minLength="1" step="1" disabled value={state.selectedStudent.MOD_DISCUSSION} />
                            )} />
                          </div>
                        </div>
                      </div>
                      {/* ################# NOTAS ################# */}
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <div className="d-flex justify-content-between">
                            <Attribute header='ALG' body={(
                              <input type="decimal" className="form-control" id="original_nota_alg" min="0" max="100" placeholder="ALG" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_ALG} />
                            )} />
                            <Attribute header='FDW' body={(
                              <input type="decimal" className="form-control" id="original_nota_fdw" min="0" max="100" placeholder="FDW" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_FDW} />
                            )} />
                            <Attribute header='FDW' body={(
                              <input type="decimal" className="form-control" id="original_nota_fmi" min="0" max="100" placeholder="FMI" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_FMI} />
                            )} />
                            <Attribute header='EAD' body={(
                              <input type="decimal" className="form-control" id="original_nota_ead" min="0" max="100" placeholder="EAD" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_EAD} />
                            )} />
                            <Attribute header='MAT' body={(
                              <input type="decimal" className="form-control" id="original_nota_mat" min="0" max="100" placeholder="MAT" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_MAT} />
                            )} />
                          </div>
                        </div>
                      </div>
                      {/* ################# DADOS DEMOGRÁFICOS ################# */}
                      <div className="form-group row">
                        <div className="col-sm-7">
                          <Attribute header='Idade' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.Idade} id="original_idade">
                              <option disabled value="menor18">Menor que 18</option>
                              <option disabled value="18-22">Entre 18 e 22</option>
                              <option disabled value="23-27">Entre 23 e 27</option>
                              <option disabled value="28-32">Entre 28 e 32</option>
                              <option disabled value="maior32">Mais de 32</option>
                            </select>
                          )} />
                        </div>
                        <div className="col-sm-5">
                          <Attribute header='Raça' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.Raca} id="original_raca">
                              <option disabled value="branca">Branca</option>
                              <option disabled value="indigena">Indígena</option>
                              <option disabled value="mestica">Mestiça</option>
                              <option disabled value="negra">Negra</option>
                              <option disabled value="outra">Outra</option>
                            </select>
                          )} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-7">
                          <Attribute header='Renda Familiar' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.Renda_Familiar} id="original_renda">
                              <option disabled value="950_1425">Entre R$950 e R$1425</option>
                              <option disabled value="1426_2375">Entre R$1426 e R$2375</option>
                              <option disabled value="2376_2999">Entre R$2376 e R$2999</option>
                              <option disabled value="maior3000">Acima de R$3000</option>
                            </select>
                          )} />
                        </div>
                        <div className="col-sm-5">
                          <Attribute header='Sexo' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.Sexo} id="original_sexo">
                              <option disabled value="feminino">Feminino</option>
                              <option disabled value="masculino">Masculino</option>
                              <option disabled value="outro">Outro</option>
                            </select>
                          )} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-7">
                          <Attribute header='Est. Civil' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.E_Civil} id="original_e_civil">
                              <option disabled value="casado">Casado</option>
                              <option disabled value="divorciado">Divorciado</option>
                              <option disabled value="mora_junto">Mora junto</option>
                              <option disabled value="separado">Separado</option>
                              <option disabled value="solteiro">Solteiro</option>
                              <option disabled value="viuvo">Viúvo</option>
                            </select>
                          )} />
                        </div>
                        <div className="col-sm-5">
                          <Attribute header='Trabalha' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.trabalha} id="original_trabalha">
                              <option disabled value="nao">Não</option>
                              <option disabled value="integral">Integral</option>
                              <option disabled value="parcial">Parcial</option>
                              <option disabled value="eventual">Eventual</option>
                            </select>
                          )} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-7">
                          <Attribute header='Mora com' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.qtde_resid_casa} id="original_qtd_casa">
                              <option disabled value="0">0 pessoas</option>
                              <option disabled value="1">1 pessoa</option>
                              <option disabled value="2">2 pessoas</option>
                              <option disabled value="3">3 pessoas</option>
                              <option disabled value="4">4 pessoas</option>
                              <option disabled value="5">mais de 4</option>
                            </select>
                          )} />
                        </div>
                        <div className="col-sm-5">
                          <Attribute header='PC' body={(
                            <select className="custom-select" disabled value={state.selectedStudent.PC_casa} id="original_pc_casa">
                              <option disabled value="sim">Sim</option>
                              <option disabled value="nao">Não</option>
                            </select>
                          )} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        }}
      </StudentConsumer >
    )
  }
}