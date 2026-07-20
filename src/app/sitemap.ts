import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['']
  return routes.map((route) => ({
    url: `https://jhye.dev${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }))
}
