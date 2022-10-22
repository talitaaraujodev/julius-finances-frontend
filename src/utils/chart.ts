export const chart = {
  chartMensal: {
    options: {
      xaxis: {
        categories: [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro",
        ],
      },
      colors: ["#1ba37a"],
      toolbar: {
        autoSelected: "zoom",
      },
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      title: {
        text: "Mensal",
      },
    },

    series: [
      {
        name: "Mensal",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  },
  chartDiario: {
    options: {
      xaxis: {
        categories: [14, 15, 16, 17, 18, 19, 20, 21, 22],
      },
      colors: ["#1ba37a"],
      toolbar: {
        autoSelected: "zoom",
      },
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      title: {
        text: "Diário",
      },
    },

    series: [
      {
        name:"Diário",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  },
};
