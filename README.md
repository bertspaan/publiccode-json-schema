# JSON Schemas for Public Code YAML files

## Validate Public Code YAML file

To validate a `publiccode.yml` file using the [JSON Schema from this repository](input/publiccode.schema.json), run:

```
node validate.js ./input/publiccode.example.yml
```

## Generate documentation

To create Markdown documentation (like [`schema.md`](https://github.com/publiccodenet/publiccode.yml/blob/develop/schema.md)) using the [JSON Schema from this repository](input/publiccode.schema.json), run:

```
node generate-docs.js > ./output/schema-draft.md
```
