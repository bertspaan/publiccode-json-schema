#!/usr/bin/env node

const yamlParser = require('js-yaml')
const Ajv = require('ajv')
const ajv = new Ajv()

const SCHEMA_FILE = './input/publiccode.schema.json'

const files = process.argv.slice(2)

if (!files.length) {
  console.error('No YAML files specified')
  return
}

const validate = ajv.compile(require(SCHEMA_FILE))

files.forEach((file) => {
  console.log(`Validating ${file}:`)
  const valid = validate(file)
  console.log(JSON.stringify(validate.errors, null, 2))
})
