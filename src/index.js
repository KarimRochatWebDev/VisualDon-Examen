
//Ensemble de liens qui peuvent m'être utiles
//https://momentjs.com/
//https://github.com/idris-maps/heig-datavis-2019/blob/master/20190308-intro-data/axes.html
//https://observablehq.com/@idris-maps/d3-definir-les-axes
//https://observablehq.com/@idris-maps/batons-svg
//https://observablehq.com/@idris-maps/fonctions-d3
//https://github.com/idris-maps/exemple-transformation-de-donnees-avec-node/blob/master/drawGraph.js
//https://github.com/idris-maps/heig-datavis-2019/blob/master/20190301-manipulation-dom/exemples/exemple_1.html



/*
* Importation des librairies et des fichiers et initializsation des éléments HTML
*/

const fetch = require('node-fetch')
const d3 = require('d3')
const moment = require('moment')
const data = require('../data/donnees.json')
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const svg = d3.select('#graph')
.attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
const circle = svg.append('g')

console.log(data.map(d=>d.Vinfinity))

/*
* Diamètre du point
*/

const diametreScale = d3.scaleLinear()
.domain([d3.min(data, d => d.Diameter), d3.max(data, d => d.Diameter)])
.range([0, 10])



/*  
* Couleur du point
*/

const colorScale = d3.scaleLinear()
.domain([d3.min(data, d => d.DMinimum), d3.max(data, d=>d.DMinimum)])
.range(['blue', 'red'])



/*
* Axe vertical
*/

const yScale = d3.scaleLinear()
.domain([0, d3.max(data.map(d=>d.Vinfinity*1000))])
.range([HEIGHT,0])
const axisY = d3.axisLeft()
.scale(yScale)
.tickFormat(d => d)
.ticks()



/*
* Axe horizontal
*/

const xScale = d3.scaleLinear()
.domain([d3.min(data.map(d=>d.Date)), d3.max(data.map(d=>d.Date))])
.range([0, WIDTH])
const axisX = d3.axisBottom()
.scale(xScale)
.tickFormat(d=>d)
.ticks(5)



/*
* Représentation des points
*/


svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d.Date))
    .attr('cy', d => yScale(d.Vinfinity))
    .attr('fill', d => colorScale(d.DMinimum))
    .attr('cr', d => diametreScale(d.Diameter))

svg.append('g')
    .call(axisY)
    .attr('transform', `translate(${WIDTH/2}, 0)`)
svg.append('g')
    .call(axisX)
    .attr('transform', `translate(0, ${HEIGHT-1})`)
