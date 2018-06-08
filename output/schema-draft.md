# `publiccode.yml` standard

This document contains an informal description of the schema of
`publiccode.yml`.

Version: 0.1-alpha1
This file needs to be converted to JSON-Schema.

## Structure

### Country-specific extensions

## Top-level section

### Key `publiccode-yaml-version`

- Title: Version of the specification
- Type: string
- Presence: mandatory
- Default value: 
- Example: http:&#x2F;&#x2F;w3id.org&#x2F;publiccode&#x2F;version&#x2F;0.1

This key specifies the version to which the current `publiccode.yml` adheres to, for forward compatibility. Current version is `0.1`. Accepts a URL
### Key `name`

- Title: The Name Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: Medusa


### Key `applicationSuite`

- Title: The Applicationsuite Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: MegaProductivitySuite


### Key `repoURL`

- Title: The Repourl Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: https:&#x2F;&#x2F;example.com&#x2F;italia&#x2F;repo.git


### Key `softwareVersion`

- Title: The Softwareversion Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: 1.0


### Key `releaseDate`

- Title: The Releasedate Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: 2017-04-15


### Key `logo`

- Title: The Logo Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: img&#x2F;logo.jpg


### Key `platforms`

- Title: 
- Type: array
- Presence: mandatory
- Default value: 
- Example: 


### Key `countriesSupported`

- Title: 
- Type: array
- Presence: mandatory
- Default value: 
- Example: 


### Key `countriesNotSupported`

- Title: 
- Type: array
- Presence: mandatory
- Default value: 
- Example: 


### Key `softwareType`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `intendedAudience`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `usedBy`

- Title: 
- Type: array
- Presence: mandatory
- Default value: 
- Example: 


### Key `legal`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `developmentStatus`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `maintenance`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `roadmap`

- Title: The Roadmap Schema 
- Type: string
- Presence: mandatory
- Default value: 
- Example: https:&#x2F;&#x2F;example.com&#x2F;italia&#x2F;medusa&#x2F;roadmap


### Key `awards`

- Title: 
- Type: array
- Presence: mandatory
- Default value: 
- Example: 


### Key `localization`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `dependencies`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 


### Key `it`

- Title: 
- Type: object
- Presence: mandatory
- Default value: 
- Example: 



