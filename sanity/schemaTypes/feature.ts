import {defineField, defineType} from 'sanity'
import {getUniqueId} from '../utils/common'

export default defineType({
  name: 'feature',
  title: 'Feature Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: `Feature ${getUniqueId()}`,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'isShown',
      title: 'Turn on to show this feature',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'switch',
      },
    }),
  ],
})
