import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'

import BlogHero from '@/components/BlogHero'
import RenderBlog from '@/components/RenderBlog'
import { loadBlogPost } from '@/helpers/file-helpers'

import styles from './postSlug.module.css'

async function BlogPost({ params }) {
	const { postSlug } = params
	const blogData = await loadBlogPost(postSlug)
	const { frontmatter, content } = blogData
	const { publishedOn, title } = frontmatter

	const mdxSource = await serialize(content)

	return (
		<article className={styles.wrapper}>
			<BlogHero title={title} publishedOn={publishedOn} />
			<div className={styles.page}>
				<RenderBlog blogData={mdxSource}></RenderBlog>
			</div>
		</article>
	)
}

export default BlogPost
