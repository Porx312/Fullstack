const fs = require('fs') 

const content = fs.readFileSync('Readme.md','utf8')

const wordCount = content.split(' ')


ReactWordCount = content.match(/react/gi ?? []).length 

 console.log('palabras',wordCount.length)
console.log('palabra React', ReactWordCount)    