
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

//Il faudrait aussi penser à la viewbox, à la taille de l'écran pour que le graphique s'adapte
//Peut-être qu'il faut reprendre tous les points et faire un attr.('fill', colorScale) pour les remplir de couleur
//Et peut-être pareil pour le diamètre

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const container = DOM.svg(WIDTH, HEIGHT)
const svg = d3.select(container)
const points = svg.append('g')

points.selectAll('point')
    .data(data)
    .enter()
    .append('point')
    .attr('x', )
    .attr('y', )


/* Bout de code pouvant être intéressant
const graph = DATA =>
`<svg width="1000" heigth="1000" xmlns="http://www.w3.org/2000/svg">
${data.map((pays,i) => `<rect width="90" height="${pays.somme*8}" x="${(i)*100}" y="0" fill="blue" />
<text x="${(i)*100}" y="${(100)}" font-family="Comic Sans MS" font-size="12" fill="black" >${pays.p} ${"="} ${pays.somme} </text>`)}
</svg>`
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

