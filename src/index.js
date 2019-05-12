
//Ensemble de liens qui peuvent m'être utiles
//https://momentjs.com/
//https://github.com/idris-maps/heig-datavis-2019/blob/master/20190308-intro-data/axes.html
//https://observablehq.com/@idris-maps/d3-definir-les-axes
//https://observablehq.com/@idris-maps/batons-svg
//https://observablehq.com/@idris-maps/fonctions-d3
//https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/drawGraph.js
//https://github.com/idris-maps/heig-datavis-2019/blob/master/20190301-manipulation-dom/exemples/exemple_1.html

/*
* Importation des librairies et des fichiers
*/

const fetch = require('node-fetch')
const d3 = require('d3')
const billboard = require('billboard')
const moment = require('moment')
const http = require('http')
const data = require('../data/donnees.json')













/*
* Représentation des points
*/

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const container = DOM.svg(WIDTH, HEIGHT)
const svg = d3.select(container)
const points = svg.append('g')
const body = d3.select('body')

/*
//Pour chaque objet dans mon fichier des données que j'ajoute, un nouveau point est créé avec ses attributs
points.selectAll('point')
    .data(data)
    .enter()
    .append('point')
    .attr('x', xScale)
    .attr('y', yScale)
    .attr('r', diametreScale)
    .attr('fill', colorScale)
*/


/* Des morceaux de codes issus de l'exemple

export const svg = body.append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

export const xAxis = d3.axisBottom()
  .ticks(4)
export const bottomAxis = svg.append('g')
  .attr('transform', `translate(0, ${HEIGHT - MARGIN})`)
export const yAxis = d3.axisLeft()
export const leftAxis = svg.append('g')
  .attr('transform', `translate(${MARGIN}, 0)`)

const body = d3.select('body')
export const selectX = body.append('select')
export const selectY = body.append('select')

Peux-être faire un addEventListener sur chaque point pour gérer le click

    .append('circle')
      .attr('cx', CIRCLE_RADIUS)
      .attr('cy', CIRCLE_RADIUS)
      .attr('r', CIRCLE_RADIUS)

*/

/* Bout de code pouvant être intéressant
const graph = DATA =>
`<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
${data.map((pays,i) => `<rect width="90" height="${pays.somme*8}" x="${(i)*100}" y="0" fill="blue" />
<text x="${(i)*100}" y="${(100)}" font-family="Comic Sans MS" font-size="12" fill="black" >${pays.p} ${"="} ${pays.somme} </text>`)}
</svg>`
*/

/*
const graphique = data =>
'<svg width=WIDTH height=HEIGHT xmlns="http://www.w3.org/2000/svg">
${data.map(Object, i) => '<circle r=diametreScale fill=colorScale x=xScale y=yScale/>'}
</svg>'
*/














/*
* Diamètre du point
*/

const diametreScale = d3.scaleLinear
    .domain((d3.min(data, d => d.Diameter), d3.max(data, d => d.Diameter)))
    .range([0, 10])



/*  
* Couleur du point
*/

const colorScale = d3.scaleLinear
    .domain([d3.min(data, d => d.DMinimum, d3.max(data, d=>d.DMinimum))])
    .range([blue, red])

/*
* Axe vertical
*/

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d=>d.Vinfinity)])
    .range([0, 35000])

const axisY = d3.axisLeft()
.scale(yScale)
.ticks(7)
.tickFormat(d)


/*
* Axe horizontal
*/

//Utiliser moment pour obtenir les dates en ms

const xScale = d3.scaleLinear()
    .domain([d3.min(data, d=>d.Date), d3.max(data, d=>d.Date)])
    .range([-30, 30])

const axisX = d3.axisBottom()
.scale(xScale)
.ticks(12)
.tickFormat(x)




/*
* Nom de l'astéroïde
*/

//Peut-être avec un hover


/*
* Checkboxes (optionnel, on verra comment ça se passe)
*/

