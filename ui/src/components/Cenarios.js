import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import { StudentConsumer } from '../context'
import EvasionBadge from './EvasionBadge'
import CenarioDetalhes from './CenarioDetalhes'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/resizable'

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class Cenarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      cenarios: props.cenas,
      update: 0
    };
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {/*<button onClick={() => this.resetLayout()}>Reset Layout</button>*/}
          <ResponsiveReactGridLayout className="layout"
            cols={{ lg: 12, md: 10, sm: 6, xs: 3, xxs: 1 }}
            draggable={true}
            rowHeight={80}
            layouts={this.state.layouts}
            onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)} >
            {this.state.cenarios.map(cenario => {
              return (
                <div className="scenario-card card" key={cenario.id}
                  data-grid={{ w: 1, h: 1, x: cenario.x, y: cenario.y }}>
                  <div className="card-header">
                    Cenário #{cenario.id} <EvasionBadge evasion={cenario.prediction} />
                  </div>
                  <StudentConsumer>
                    {(contextState) => {
                      return (
                        <div className="card-body m-0 p-1 d-flex justify-content-between ">
                          <button type="button scenario-btn" className="btn btn-primary"
                            onClick={() => {
                              this.openModal(cenario)
                              ReactDOM.render(
                                <CenarioDetalhes cenario={cenario} />,
                                document.getElementById('content-' + cenario.id)
                              );
                            }}>
                            ver mais
                          </button>
                          <button type="button scenario-btn" className="btn btn-danger"
                            onClick={() => { this.removeScenario(cenario) }}>
                            <i className="fa fa-trash" />
                          </button>
                        </div>
                      )
                    }}
                  </StudentConsumer>
                </div>
              )
            })}
          </ResponsiveReactGridLayout>
        </div>

        <div className="area">
        </div>

        <div className="modalExample">
          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content" id="contentId">
              </div>
            </div>
          </div>
        </div>
      </React.Fragment >
    )
  }

  removeScenario = (cenario) => {
    this.state.cenarios.splice(this.state.cenarios.indexOf(cenario), 1)
    let up = this.state.update;
    this.setState(() => {
      return {
        update: up + 1
      }
    })
  }

  openModal = (cenario) => {
    let id = cenario.id
    let modaldiv = $('.modalExample').html();
    modaldiv = modaldiv.replace("myModal", 'myModal_' + id);
    modaldiv = modaldiv.replace("modal-dialog", 'modal-dialog dialog_' + id)
    modaldiv = modaldiv.replace("contentId", "content-" + id)
    $('.area').append(modaldiv);
    if (!($('.modal.in').length)) {
      $('.dialog_' + id).css({
        top: 0,
        left: 0,
      });
    }
    $('#myModal_' + id).modal({
      backdrop: false,
      show: true
    });
    $('.dialog_' + id).draggable({
      handle: ".modal-header"
    });
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.js").then(fn =>
    fn.default(Cenarios)
  );
}