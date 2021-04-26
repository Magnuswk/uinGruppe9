// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import Nyheter from './document/nyheter'
import Forfatter from './document/Forfatter'
import Artikler from './document/Artikler'
import Kategori from './document/Kategori'
import content from './object/content'
import forside from "./document/forside"
import Containerleie from "./document/Containerleie"
import Bilvraking from "./document/Bilvraking"
import Henting from "./document/Henting"
import Tjenester from "./document/Tjenester"
import Kontakt from "./document/Kontakt"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Nyheter,
    Forfatter,
    Artikler,
    Kategori,
    content,
    forside,
    Kontakt,
    Containerleie,
    Bilvraking,
    Henting,
    Tjenester

  ]),
})
