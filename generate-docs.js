#!/usr/bin/env node

const fs = require('fs')
const Mustache = require('mustache')

const schema = require('./publiccode.schema.json')

const template = fs.readFileSync('./templates/doc-template.md', 'utf8')

const toArray = (obj) => Object.keys(obj).map((key) => ({
  key,
  properties: obj[key]
}))

const view = Object.assign({}, schema, {
  properties: toArray(schema.properties)
})

const docs = Mustache.render(template, view)

console.log(docs)
