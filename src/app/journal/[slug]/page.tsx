import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { journalPosts } from '@/data/portfolio'

export function generateStaticParams() { return journalPosts.map((post) => ({ slug: post.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const post = journalPosts.find((item) => item.slug === slug); return post ? { title: post.title, description: post.excerpt, alternates: { canonical: `/journal/${post.slug}/` } } : {} }
export default async function JournalPost({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = journalPosts.find((item) => item.slug === slug); if (!post) notFound(); return <div className="page-shell"><article className="journal-article"><Link href="/journal/" className="text-link"><ArrowLeft className="h-4 w-4" /> Back to journal</Link><header><p className="eyebrow">{post.category} · {post.date}</p><h1 className="display-title">{post.title}</h1><p className="journal-dek">{post.excerpt}</p></header><div className="journal-body">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></article></div> }
