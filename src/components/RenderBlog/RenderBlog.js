'use client'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote'

function RenderBlog({ blogData }) {
	if (!blogData) return <></>
	return <MDXRemote {...blogData} />
}

export default RenderBlog
