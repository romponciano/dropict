import React from 'react'

export default class Sobre extends React.Component {
  render() {
    return (
      <div className="limit-viewport container h-100 w-100">
        <div className="row border-div limit-height">
          <div className="col-7 text-justify">
            <h3>Dropict</h3>
            <p>Este protótipo foi desenvolvido para o  projeto de pesquisa “Educators in the Loop:
            Using Scenario Simulation as a tool to understand and investigate predictive models
            of student dropout risk in Distance Learning”, de responsabilidade do pesquisador
            Rômulo Ponciano da Silva Freitas. Esta pesquisa tem como objetivo propor uma ferramenta
            que permita aos educadores do ensino à distância possam utilizar modelos preditivos de
            inteligência artificial para tentar recuperar alunos em risco de abandono, de forma que
            os próprios educadores consigam entender, avaliar e questionar os resultados dos modelos
            preditivos.</p>
            <p>Os Comitês de Ética em Pesquisa (CEPs) são compostos por pessoas que trabalham para
              que todos os projetos de pesquisa envolvendo seres humanos sejam aprovados de acordo com as
              normas éticas elaboradas pelo Ministério da Saúde. A avaliação dos CEPs leva em consideração
              os benefícios e riscos, procurando minimizá-los e busca garantir que os participantes tenham
              acesso a todos os direitos assegurados pelas agências regulatórias. Assim, os CEPs procuram
              defender a dignidade e os interesses dos participantes, incentivando sua autonomia e
              participação voluntária. Procure saber se este projeto foi aprovado pelo CEP desta
              instituição. Em caso de dúvidas, ou querendo outras informações, entre em contato com o Comitê
              de Ética da Faculdade de Medicina da Universidade Federal Fluminense (CEP FM/UFF), por
              e.mail ou telefone, de segunda à sexta, das 08:00 às 17:00 horas: E.mail: etica@vm.uff.br
              Tel/fax: (21) 26299189</p>
          </div>
          <div className="col-5">
            <div className="d-flex justify-content-center align-items-center">
                <img src="img/uff-logo.png" className="img-fluid" width="100px" height="100px" />
                <img src="img/ic-logo.png" className="img-fluid" width="300px" height="170px" />              
            </div>
            <div className="d-flex flex-column">
              <h3 className="text-center mb-4">Universidade Federal Fluminense</h3>
              <p className="mb-1"><strong>Pesquisador principal:</strong> Rômulo Ponciano da Silva Freitas</p>
              <p className="mb-3"><strong>Email:</strong> romuloponciano@id.uff.br</p>
              <p>Esta pesquisa foi aprovada pelo Comitê de Ética em Pesquisa (CEP) da Universidade Federal
              Fluminense. Ainda assim, para sanar qualquer dúvida referente aos procedimentos, riscos,
              benefícios e outros assuntos relacionados com a pesquisa, basta entrar em contato com o
              pesquisador responsável pela forma desejada presente no topo desta seção.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}