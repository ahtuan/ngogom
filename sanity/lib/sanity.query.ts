// eslint-disable
import type {PortableTextBlock} from '@portabletext/types'
import type {Slug} from '@sanity/types'
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

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] {
 title, 
 "slug": slug.current, 
 "image": mainImage, 
 excerpt
}| order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<PostItem[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
 title, 
 "slug": slug.current, 
 "image": mainImage, 
 excerpt, 
 body 
}`

export async function getPost(client: SanityClient, slug: string): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const recentPostQuery = groq`*[_type == "post" && slug.current != $slug] {
 title, 
 "slug": slug.current, 
 "image": mainImage, 
 excerpt
}[0..3] | order(_createdAt desc)`

export async function getRecentPosts(client: SanityClient, slug: string): Promise<PostItem[]> {
  return await client.fetch(recentPostQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export interface PostItem {
  title: string
  image: Image
  slug: string
  excerpt: string
}

export interface Post {
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  image: Image
  body: PortableTextBlock[]
}

export interface Feature {
  image: Image
  description: string
}
