import React from 'react'
import { StudentConsumer } from '../context'
import EvasionBadge from './EvasionBadge'
import SelectedIaBadge from './SelectedIaBadge'

export default class DadosAluno extends React.Component {
  render() {
    return (
      <StudentConsumer>
        {(state) => {
          if (state.selectedStudent) {
            return (
              <React.Fragment>
                <div className="row">
                  <div className="col-12">
                    <h3>
                      <SelectedIaBadge /> Predição Original:
                      <EvasionBadge evasion={state.selectedStudent.EVASAO} />
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <form>
                      <div className="form-group row">
                        <div className="col-sm-5">
                          <div className="card">
                            <div className="card-header">
                              <strong>Quantidade de Acessos</strong>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col text-center">
                                  <label htmlFor="login">Logins</label>
                                  <input type="number" className="form-control" id="login" min="0" max="5000" placeholder="Login" maxLength="5" minLength="1" step="1" disabled value={state.selectedStudent.TOTAL_ACESSO} />
                                </div>
                                <div className="col text-center">
                                  <label htmlFor="forum">Fórum</label>
                                  <input type="number" className="form-control" id="forum" min="0" max="5000" placeholder="Fórum" maxLength="5" minLength="1" step="1" disabled value={state.selectedStudent.FORUM} />
                                </div>
                                <div className="col text-center">
                                  <label htmlFor="discussao">Discussão</label>
                                  <input type="number" className="form-control" id="discussao" min="0" max="5000" placeholder="Discussão" maxLength="5" minLength="1" step="1" disabled value={state.selectedStudent.MOD_DISCUSSION} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card">
                            <div className="card-header">
                              <strong>Notas</strong>
                            </div>
                            <div className="card-body">
                              <div className="row">
                                <div className="col text-center">
                                  <label htmlFor="ALG">ALG</label>
                                  <input type="decimal" className="form-control" id="nota_alg" min="0" max="100" placeholder="ALG" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_ALG} />
                                </div>
                                <div className="col text-center">
                                  <label htmlFor="FDW">FDW</label>
                                  <input type="decimal" className="form-control" id="nota_fdw" min="0" max="100" placeholder="FDW" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_FDW} />
                                </div>
                                <div className="col text-center">
                                  <label htmlFor="FMI">FMI</label>
                                  <input type="decimal" className="form-control" id="nota_fmi" min="0" max="100" placeholder="FMI" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_FMI} />
                                </div>
                                <div className="col text-center">
                                  <label htmlFor="EAD">EAD</label>
                                  <input type="decimal" className="form-control" id="nota_ead" min="0" max="100" placeholder="EAD" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_EAD} />
                                </div>
                                <div className="col text-center">
                                  <label htmlFor="MAT">MAT</label>
                                  <input type="decimal" className="form-control" id="nota_mat" min="0" max="100" placeholder="MAT" maxLength="5" minLength="1" step="0.1" disabled value={state.selectedStudent.NOTA_MAT} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row px-3">
                        <div className="card w-100">
                          <div className="card-header">
                            <strong>Dados Demográficos</strong>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <label htmlFor="idade" className="col-sm-2 col-form-label">Idade</label>
                              <div className="col-sm-5">
                                <select className="custom-select" disabled value={state.selectedStudent.Idade} id="idade">
                                  <option value="-1" disabled>Idade</option>
                                  <option value="menor18">Menor que 18</option>
                                  <option value="18-22">Entre 18 e 22</option>
                                  <option value="23-27">Entre 23 e 27</option>
                                  <option value="28-32">Entre 28 e 32</option>
                                  <option value="maior32">Mais de 32</option>
                                </select>
                              </div>
                              <label htmlFor="raca" className="col-sm-2 col-form-label">Raça</label>
                              <div className="col-sm-3">
                                <select className="custom-select" disabled value={state.selectedStudent.Raca} id="raca">
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
                              <label htmlFor="renda" className="col-sm-2 col-form-label">Renda Familiar</label>
                              <div className="col-sm-5">
                                <select className="custom-select" disabled value={state.selectedStudent.Renda_Familiar} id="renda">
                                  <option value="-1" className="select-invalid-value" disabled>Renda familiar</option>
                                  <option value="0">Nenhuma</option>
                                  <option value="950_1425">Entre R$950 e R$1425</option>
                                  <option value="1426_2375">Entre R$1426 e R$2375</option>
                                  <option value="2376_2999">Entre R$2376 e R$2999</option>
                                  <option value="maior3000">Acima de R$3000</option>
                                </select>
                              </div>
                              <label htmlFor="sexo" className="col-sm-2 col-form-label">Sexo</label>
                              <div className="col-sm-3">
                                <select className="custom-select" disabled value={state.selectedStudent.Sexo} id="sexo">
                                  <option value="-1" disabled>Sexo</option>
                                  <option value="feminino">Feminino</option>
                                  <option value="masculino">Masculino</option>
                                  <option value="outro">Outro</option>
                                </select>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <label htmlFor="e_civil" className="col-sm-2 col-form-label">Estado Civil</label>
                              <div className="col-sm-5">
                                <select className="custom-select" disabled value={state.selectedStudent.E_Civil} id="e_civil">
                                  <option value="-1" disabled>Estado Civil</option>
                                  <option value="casado">Casado</option>
                                  <option value="divorciado">Divorciado</option>
                                  <option value="mora_junto">Mora junto</option>
                                  <option value="separado">Separado</option>
                                  <option value="solteiro">Solteiro</option>
                                  <option value="viuvo">Viúvo</option>
                                </select>
                              </div>
                              <label htmlFor="trabalha" className="col-sm-2 col-form-label">Trabalha</label>
                              <div className="col-sm-3">
                                <select className="custom-select" disabled value={state.selectedStudent.trabalha} id="trabalha">
                                  <option value="-1" disabled>Trabalha</option>
                                  <option value="nao">Não</option>
                                  <option value="integral">Integral</option>
                                  <option value="parcial">Parcial</option>
                                  <option value="eventual">Eventual</option>
                                </select>
                              </div>
                            </div>
                            <div className="row mt-2">
                              <label htmlFor="qtd_casa" className="col-sm-2 col-form-label">Mora com</label>
                              <div className="col-sm-5">
                                <select className="custom-select" disabled value={state.selectedStudent.qtde_resid_casa} id="qtd_casa">
                                  <option value="-1" disabled>Mora com</option>
                                  <option value="0">0 pessoas</option>
                                  <option value="1">1 pessoa</option>
                                  <option value="2">2 pessoas</option>
                                  <option value="3">3 pessoas</option>
                                  <option value="4">4 pessoas</option>
                                  <option value="5">mais de 4</option>
                                </select>
                              </div>
                              <label htmlFor="pc_casa" className="col-sm-2 col-form-label">PC em casa</label>
                              <div className="col-sm-3">
                                <select className="custom-select" disabled value={state.selectedStudent.PC_casa} id="pc_casa">
                                  <option value="-1" disabled>Possui PC</option>
                                  <option value="sim">Sim</option>
                                  <option value="nao">Não</option>
                                </select>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </React.Fragment>
            )
          }
        }}
      </StudentConsumer>
    )
  }
}