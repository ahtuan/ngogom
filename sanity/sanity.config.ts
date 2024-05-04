import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {dataset, projectId} from './lib/sanity.api'
export default defineConfig({
  name: 'default',
  title: 'Ngo',
  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
