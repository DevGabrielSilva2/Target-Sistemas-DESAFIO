/*QUESTAO 3 DO DESAFIO 
  O CODIGO FOI FEITO EM JAVA SCRIPT
  PARA EXECUTA-LO E NECESSARIO INSTALAR O NODEJS

  APOS INSTALAR O NODEJS ABRA O CMD E NAVEGUE ATE O DIRETORIO ONDE O ARQUIVO FATURAMENTO.JS ESTA LOCALIZADO
  E RODE O COMANDO: node faturamento.js

*/
const faturamentoDiario = [
  778, 0, 116, 301, 144, 687, 720, 904, 155, 390,
  107, 804, 0, 733, 377, 0, 351, 847, 315, 418,
  992, 202, 993, 498, 774, 749, 294, 140, 852, 715,
  759, 977, 831, 706, 252, 106, 766, 344, 510, 758,
  191, 202, 700, 352, 745, 400, 149, 608, 964, 995,
  256, 958, 736, 327, 477, 667, 0, 840, 348, 815,
  648, 481, 578, 124, 909, 391, 153, 490, 470, 258,
  309, 765, 585, 175, 0, 583, 483, 989, 496, 931,
  933, 872, 618, 512, 498, 688, 485, 923, 391, 338,
  310, 247, 329, 0, 863, 615, 740, 158, 310, 347,
  784, 417, 842, 678, 143, 733, 559, 174, 192, 437,
  971, 153, 786, 309, 178, 410, 249, 257, 512, 456,
  955, 858, 945, 549, 655, 207, 0, 172, 652, 233,
  760, 385, 738, 735, 894, 515, 733, 0, 371, 471,
  683, 575, 449, 248, 231, 912, 684, 247, 396, 477,
  582, 187, 893, 343, 370, 304, 170, 984, 237, 140,
  122, 819, 105, 353, 481, 852, 727, 227, 699, 817,
  352, 606, 171, 678, 494, 964, 371, 853, 514, 970,
  374, 706, 310, 499, 765, 205, 555, 298, 582, 842,
  453, 639, 441, 368, 656, 114, 265, 663, 510, 857,
  258, 376, 266, 515, 893, 720, 548, 291, 816, 973,
  860, 820, 873, 865, 0, 508, 875, 917, 695, 496,
  262, 345, 222, 595, 583, 111, 302, 956, 699, 603,
  812, 521, 984, 741, 871, 189, 447, 839, 167, 411,
  416, 655, 512, 681, 544, 845, 158, 260, 906, 222,
  714, 326, 213, 305, 318, 110, 446, 334, 917, 731,
  520, 844, 971, 287, 944, 386, 209, 111, 803, 445,
  141, 353, 301, 181, 240, 623, 314, 620, 158, 858,
  467, 607, 701, 716, 649, 296, 134, 200, 543, 850,
  882, 149, 419, 935, 975, 316, 0, 248, 344, 214,
  275, 797, 873, 530, 223, 279, 960, 516, 597, 553,
  707, 679, 183, 827, 707, 822, 102, 760, 925, 910,
  238, 970, 950, 424, 887, 858, 0, 198, 788, 642,
  402, 448, 166, 801, 0, 274, 739, 982, 792, 384,
  726, 511, 221, 103, 237, 741, 775, 212, 198, 381,
  809, 695, 990, 952, 953, 162, 745, 127, 869, 252,
  544, 360, 748, 437, 634
];

// calcular os resultados
function calcularFaturamento(faturamentoDiario) {
  if (faturamentoDiario.length === 0) return;

  let menorValor = Infinity;
  let maiorValor = -Infinity;
  let totalFaturamento = 0;
  let diasComFaturamento = 0;

  // Calcular menor e maior valor de faturamento e soma total dos faturamentos
  for (let i = 0; i < faturamentoDiario.length; i++) {
    let valor = faturamentoDiario[i];
    if (valor > 0) {
      if (valor < menorValor) menorValor = valor;
      if (valor > maiorValor) maiorValor = valor;
      totalFaturamento += valor;
      diasComFaturamento++;
    }
  }

  // Se não houver dias com faturamento, a média não pode ser calculada
  if (diasComFaturamento === 0) return {
    menorValor: 0,
    maiorValor: 0,
    diasAcimaDaMedia: 0
  };

  // Calcular a média anual considerando apenas os dias com faturamento
  let mediaAnual = totalFaturamento / diasComFaturamento;

  // dias que o faturamento diário foi superior à média anual
  let diasAcimaDaMedia = 0;
  for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i] > mediaAnual) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

// Chamar a função e exibir os resultados
const resultados = calcularFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento: ${resultados.menorValor}`);
console.log(`Maior valor de faturamento: ${resultados.maiorValor}`);
console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`);