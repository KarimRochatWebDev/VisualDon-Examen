
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
const moment = require('moment')
const data = require('../data/donnees.json')




/*
* Définition des éléments HTML
*/

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const container = DOM.svg(WIDTH, HEIGHT)
const svg = d3.select(container)
const body = d3.select('body')








/*
* Représentation des points
*/


 const points = svg.append('g')
  
  points.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('x', d => xScale(d.Date))
    .attr('y', d => yScale(d.Vinfinity))
    .attr('fill', d => colorScale(d.DMinimum))
    .attr('r', d => diametreScale(d.Diameter))










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
.range([35000, 0])

const axisY = d3.axisLeft()
.scale(yScale)
.ticks(7)



/*
* Axe horizontal
*/

const xScale = d3.scaleLinear()
.domain([d3.min(data, d=>d.Date), d3.max(data, d=>d.Date)])
.range([-30, 30])

const axisX = d3.axisBottom()
.scale(xScale)
.ticks(12)