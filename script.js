// seleciona os elementos de input e resultado
const diaInput = document.getElementById('dia');
const mesInput = document.getElementById('mes');
const anoInput = document.getElementById('ano');
const resultado = document.querySelector('.resultado');

// adiciona um evento de clique ao botão
const botao = document.querySelector('.botao');
botao.addEventListener('click', calcularIdade);

// função para calcular a idade
function calcularIdade() {
  // obtém os valores de dia, mês e ano do input
  const dia = Number(diaInput.value);
  const mes = Number(mesInput.value);
  const ano = Number(anoInput.value);
  
  // obtém a data atual
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth() + 1; // adiciona 1 porque os meses começam em 0
  const diaAtual = hoje.getDate();
  
  // calcula a diferença de anos
  let idade = anoAtual - ano;
  // subtrai 1 se o mês atual é menor que o mês de nascimento
  if (mesAtual < mes) {
    idade--;
  } else if (mesAtual === mes && diaAtual < dia) {
    // subtrai 1 se estamos no mesmo mês, mas o dia atual é menor que o dia de nascimento
    idade--;
  }
  
  // calcula a diferença de meses e dias
  let meses = 0;
  let dias = 0;
  if (mesAtual > mes) {
    meses = mesAtual - mes;
    if (diaAtual < dia) {
      meses--;
      const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
      dias = ultimoDiaMesAnterior - dia + diaAtual;
    } else {
      dias = diaAtual - dia;
    }
  } else if (mesAtual === mes) {
    if (diaAtual >= dia) {
      dias = diaAtual - dia;
    } else {
      const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
      dias = ultimoDiaMesAnterior - dia + diaAtual;
      meses = 11;
    }
  } else {
    meses = 12 - (mes - mesAtual);
    if (diaAtual < dia) {
      meses--;
      const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
      dias = ultimoDiaMesAnterior - dia + diaAtual;
    } else {
      dias = diaAtual - dia;
    }
  }
  
  // atualiza a div de resultado
  resultado.innerHTML = `<h2>${idade} years</h2><h2>${meses} months</h2><h2>${dias} days</h2>`;
}
