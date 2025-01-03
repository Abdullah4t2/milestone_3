import { type SchemaTypeDefinition } from 'sanity'
import {  postType, } from '../post'
import { author } from '../author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ postType,author],
}
