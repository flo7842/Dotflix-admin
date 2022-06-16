const labels = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
];

const dataSubscription = {
    labels: labels,
    datasets: [
    {
      label: 'Ventes d\'abonnement (Année 2022)',
      backgroundColor: '#71d1bd',
      borderColor: '#71d1bd',
      data: [0, 10, 5, 20, 30, 45, 50, 55, 60, 40, 70, 90],
    },
    {
      label: "Désabonnement (Année 2022)",
      data: [70, 90, 44, 60, 83, 90, 100, 10, 5, 20, 30, 45],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)"
    },
  ],
};

var ctx = document.getElementById('lineChart');

if(ctx){
  var lineChart = new Chart(ctx, {
      type: 'line',
      data: dataSubscription,
      options: {
          maintainAspectRatio: true,
          plugins: {
            legend: {
              labels: {
                padding: 10
              },
              position: 'bottom',
              display: true,
            }
          }
        }
      }
  )
}
