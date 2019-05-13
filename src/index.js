/*
* Importation des librairies et des fichiers et initializsation des éléments HTML
*/

const d3 = require('d3')
const data = require('../data/data.json')
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const svg = d3.select('#graph').attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
const circle = svg.append('g')
const text = svg.append('g')

/*
* Rayon du point
*/

const rayonScale = d3.scaleLinear()
.domain([5, d3.max(data, d=>d.Diameter)])
.range([0, 40])



/*  
* Couleur du point
*/

const colorScale = d3.scaleLinear()
.domain([d3.min(data, d=>d.DNominal), d3.max(data, d=>d.DNominal)])
.range(["red", "blue"])



/*
* Axe vertical
*/

const yScale = d3.scaleLinear()
.domain([0, d3.max(data.map(d=>d.Vinfinity*1000))])
.range([HEIGHT,50])
const axisY = d3.axisLeft()
.scale(yScale)
.tickFormat(d => `${d}km/s`)
.ticks(5)



/*
* Axe horizontal
*/

const xScale = d3.scaleLinear()
.domain([d3.min(data.map(d=>d.Date)), d3.max(data.map(d=>d.Date))])
.range([50, WIDTH-50])
const axisX = d3.axisBottom()
.scale(xScale)
.tickFormat(d => `${Math.round(d/52000000)}`)
.ticks(20)

/*
* Représentation des cercles
*/

svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.Date))
    .attr("cy", d => yScale(d.Vinfinity*1000))
    .attr("r", d => rayonScale(d.Diameter))
    .attr("fill", d => colorScale(d.DNominal))
    .attr("stroke", "white")
    .attr("opacity", 1)

//Ajout des noms
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", d => xScale(d.Date))
    .attr("y", d => yScale(d.Vinfinity*1000))
    .attr("text-anchor", "middle")
    .attr("font-family", "arial")
    .attr("fill", "white")
    .attr("font-size", 10)
    .text(d => d.Name)



/*
* Ajout au svg
*/

svg.append('g')
    .call(axisY)
    .attr('transform', `translate(${WIDTH/2}, -30)`)
svg.append('g')
    .call(axisX)
    .attr('transform', `translate(0, ${HEIGHT-30})`)