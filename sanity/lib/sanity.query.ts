// eslint-disable
import type {PortableTextBlock} from '@portabletext/types'
import type {ImageAsset, Slug} from '@sanity/types'
import groq from 'groq'
import {type SanityClient} from 'next-sanity'
import {Image} from 'sanity'

export const featureQuery = groq`*[_type == 'feature' && isShown == true] {
    "image": mainImage, 
    description
}[0..9]`
export async function getFeatures(client: SanityClient): Promise<Feature[]> {
  return await client.fetch(featureQuery)
}
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(client: SanityClient, slug: string): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: Image
  body: PortableTextBlock[]
}

export interface Feature {
  image: Image
  description: string
}
