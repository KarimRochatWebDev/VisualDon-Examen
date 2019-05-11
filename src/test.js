
const moment = require('moment')
const data = require('../data/donnees.json')

let Dates = []
Dates = moment(data.map(d => d.Date), 'YYYY-MM-DD').unix()

console.log(lesDates);