import {createClient, type SanityClient} from 'next-sanity'

import {apiVersion, dataset, projectId, useCdn} from './sanity.api'

export function getClient(preview?: {token: string}): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'published',
    })
  }
  return client
}
