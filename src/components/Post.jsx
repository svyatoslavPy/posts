import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
	const [post, setPost] = useState([])
	const [postErrorMessage, setPostErrorMessage] = useState()

	const { id } = useParams()

	useEffect(() => {
		const getPost = async () => {
			try {
				const resp = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${id}`
				)
				const data = await resp.json()
				if (!resp.ok) {
					throw new Error('Error fetching post')
				}
				setPost(data)
			} catch (e) {
				setPostErrorMessage(e.message)
			}
		}
		getPost()
	}, [id])

	return (
		<div className='post'>
			<h1>Post</h1>
			<h1>{postErrorMessage && postErrorMessage}</h1>
			<p>{post && post.body}</p>
		</div>
	)
}
