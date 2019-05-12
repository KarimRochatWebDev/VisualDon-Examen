const fs = require('fs')
const d3 = require('d3')
const moment = require('moment')

const csv = fs.readFileSync('../data/data.csv', 'utf-8')
const data = d3.csvParse(csv);

fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')