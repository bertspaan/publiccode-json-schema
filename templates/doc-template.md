# `publiccode.yml` standard

This document contains an informal description of the schema of
`publiccode.yml`.

Version: 0.1-alpha1
This file needs to be converted to JSON-Schema.

## Structure

### Country-specific extensions

## Top-level section

{{#properties}}
### Key `{{ key }}`

- Title: {{ properties.title }}
- Type: {{ properties.type }}
- Presence: mandatory
- Default value: {{ properties.default }}
- Example: {{ properties.examples }}

{{{ properties.description }}}
{{/properties}}
