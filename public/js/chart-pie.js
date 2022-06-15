const dataPieChart = {
  

    datasets: [{
      label: 'Abonnement par type d\'utilisateurs',
      data: [10, 20, 30],
      backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
      ],
      borderWidth: 2,
      hoverOffset: 4,
    },
    { 
      weight: 1,
    }],
    labels: [
      'Adultes',
      'Adolescents',
      'Enfants'
  ],
  
}
 

const configPieChart = {
  type: 'doughnut',
  data: dataPieChart,
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        display: true,
      }
    },
    layout: {
      padding: {
       
       
        top: 25
      }
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  }
};

const myChartPie = new Chart(
  document.getElementById('pieChart'),
  configPieChart
);