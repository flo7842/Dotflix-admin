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
    datasets: [{
    label: 'Ventes d\'abonnement (Année 2022)',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 20, 30, 45, 50, 55, 150, 200, 250, 260],
    }],
};

const configLineChart = {
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
};

const lineChart = new Chart(
    document.getElementById('lineChart'),
    configLineChart
);
