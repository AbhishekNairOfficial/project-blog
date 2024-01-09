import React from 'react'

import Spinner from '@/components/Spinner'

import styles from './postSlug.module.css'

const Loading = () => {
	return (
		<article className={styles.wrapper}>
			<div className={styles.page}>
				<Spinner />
			</div>
		</article>
	)
}

export default Loading
