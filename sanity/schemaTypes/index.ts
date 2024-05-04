import {SchemaTypeDefinition} from 'sanity'

import blockContent from './blockContent'
import post from './post'
import feature from './feature'
export const schemaTypes = [post, blockContent, feature]
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [post, blockContent, feature],
}
