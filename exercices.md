# Soit une liste de résultats sportifs sur une épreuve évaluée au temps.
[
{
lastname: 'XXXX',
firstname: 'xxxx',
result: '1:30.65'
},
...
]

# Exercice
- Calculer le temps moyen de tous les participants sur l'épreuve
- Extraire le gagnant
- Extraire le podium
- Sortir les resultats sous la forme :
  {
  average: '2:30.51',
  podiumAverage: '1:50.51'
  winner: {
  name: 'xxxx XXXX',
  result: '1:30.65'
  },
  podium: [{
  name: 'xxxx XXXX',
  result: '1:30.65'
  },
  ...
  ]
  }

- Si vous êtes vraiment chaud charger les données depuis un csv lastname,firstname,result