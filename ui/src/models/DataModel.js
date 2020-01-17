export default class DataModel {
  constructor(forum, mod_discussion, total_acesso, nota_ead,
    nota_alg, nota_fdw, nota_fmi, nota_mat, sexo,
    idade, e_civil, raca, trabalha, qtde_resid_casa,
    renda_familiar, pc_casa) {
    this.FORUM = forum;
    this.MOD_DISCUSSION = mod_discussion;
    this.TOTAL_ACESSO = total_acesso;
    this.NOTA_EAD = nota_ead;
    this.NOTA_ALG = nota_alg;
    this.NOTA_FDW = nota_fdw;
    this.NOTA_FMI = nota_fmi;
    this.NOTA_MAT = nota_mat;
    this.Sexo = sexo;
    this.Idade = idade;
    this.E_Civil = e_civil;
    this.Raca = raca;
    this.trabalha = trabalha;
    this.qtde_resid_casa = parseInt(qtde_resid_casa);
    this.Renda_Familiar = renda_familiar;
    this.PC_casa = pc_casa;
  }

  toJson() {
    return {
      "forum": normalize('FORUM', this.FORUM),
      "mod_discussion": normalize('MOD_DISCUSSION', this.MOD_DISCUSSION),
      "total_acesso": normalize('TOTAL_ACESSO', this.TOTAL_ACESSO),
      "nota_ead": normalize('NOTAS', this.NOTA_EAD),
      "nota_alg": normalize('NOTAS', this.NOTA_ALG),
      "nota_fdw": normalize('NOTAS', this.NOTA_FDW),
      "nota_fmi": normalize('NOTAS', this.NOTA_FMI),
      "nota_mat": normalize('NOTAS', this.NOTA_MAT),
      "sexo": discretize('SEXO', this.Sexo),
      "idade": discretize('IDADE', this.Idade),
      "e_civil": discretize('E_CIVIL', this.E_Civil),
      "raca": discretize('RACA', this.Raca),
      "trabalha": discretize('TRABALHA', this.trabalha),
      "qtde_resid_casa": this.qtde_resid_casa,
      "renda_familiar": discretize('RENDA', this.Renda_Familiar),
      "pc_casa": discretize('PC', this.PC_casa)
    }
  }
}

// functions to model data
const MAX_FORUM = 1138
const MAX_MOD_DISCUSSION = 16
const MAX_TOTAL_ACESSO = 5894
const MAX_NOTAS = 10.0
const MIN_INT = 0

const SEXO_feminino = 0
const SEXO_masculino = 1
const PC_nao = 0
const PC_sim = 1
const IDADE_18_22 = 0
const IDADE_23_27 = 1
const IDADE_28_32 = 2
const IDADE_maior32 = 3
const IDADE_menor18 = 4
const RENDA_1426_2375 = 0
const RENDA_2376_2999 = 1
const RENDA_950_1425 = 2
const RENDA_maior3000 = 3
const E_CIVIL_casado = 0
const E_CIVIL_divorciado = 1
const E_CIVIL_separado = 2
const E_CIVIL_solteiro = 3
const E_CIVIL_viuvo = 4
const E_CIVIL_junto = 5
const RACA_branca = 0
const RACA_indigena = 1
const RACA_negra = 2
const RACA_outra = 3
const RACA_mestica = 4
const TRABALHA_eventual = 0
const TRABALHA_integral = 1
const TRABALHA_nao = 2
const TRABALHA_parcial = 3

function normalize(type, x) {
  if (type === 'FORUM') {
    x = x > MAX_FORUM ? MAX_FORUM : x
    return (x - MIN_INT) / (MAX_FORUM - MIN_INT)
  }
  if (type === 'MOD_DISCUSSION') {
    x = x > MAX_MOD_DISCUSSION ? MAX_MOD_DISCUSSION : x
    return (x - MIN_INT) / (MAX_MOD_DISCUSSION - MIN_INT)
  }
  if (type === 'TOTAL_ACESSO') {
    x = x > MAX_TOTAL_ACESSO ? MAX_TOTAL_ACESSO : x
    return (x - MIN_INT) / (MAX_TOTAL_ACESSO - MIN_INT)
  }
  if (type === 'NOTAS') {
    x = x > MAX_NOTAS ? MAX_NOTAS : x
    return (x - MIN_INT) / (MAX_NOTAS - MIN_INT)
  }
  return undefined
}

function discretize(type, label) {
  if (type === 'SEXO') {
    if (label === 'feminino') { return SEXO_feminino }
    if (label === 'masculino') { return SEXO_masculino }
  }
  if (type === 'PC') {
    if (label === 'sim') { return PC_sim }
    if (label === 'nao') { return PC_nao }
  }
  if (type === 'IDADE') {
    if (label === '18-22') { return IDADE_18_22 }
    if (label === '23-27') { return IDADE_23_27 }
    if (label === '28-32') { return IDADE_28_32 }
    if (label === 'maior32') { return IDADE_maior32 }
    if (label === 'menor18') { return IDADE_menor18 }
  }
  if (type === 'RENDA') {
    if (label === '1426-2375') { return RENDA_1426_2375 }
    if (label === '2376-2999') { return RENDA_2376_2999 }
    if (label === '950-1425') { return RENDA_950_1425 }
    if (label === 'maior3000') { return RENDA_maior3000 }
  }
  if (type === 'E_CIVIL') {
    if (label === 'casado') { return E_CIVIL_casado }
    if (label === 'divorciado') { return E_CIVIL_divorciado }
    if (label === 'separado') { return E_CIVIL_separado }
    if (label === 'solteiro') { return E_CIVIL_solteiro }
    if (label === 'viuvo') { return E_CIVIL_viuvo }
    if (label === 'mora_junto') { return E_CIVIL_junto }
  }
  if (type === 'RACA') {
    if (label === 'branca') { return RACA_branca }
    if (label === 'indigena') { return RACA_indigena }
    if (label === 'negra') { return RACA_negra }
    if (label === 'outra') { return RACA_outra }
    if (label === 'mestica') { return RACA_mestica }
  }
  if (type === 'TRABALHA') {
    if (label === 'eventual') { return TRABALHA_eventual }
    if (label === 'integral') { return TRABALHA_integral }
    if (label === 'nao') { return TRABALHA_nao }
    if (label === 'parcial') { return TRABALHA_parcial }
  }
  return 0
}