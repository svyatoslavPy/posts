import { useEffect, useState } from 'react'
import { PostItem } from './PostsItem'

export const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const getPosts = async () => {
			try {
				const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
				const data = await resp.json()
				setPosts(data)
			} catch (e) {
				console.log(e)
			}
		}
		getPosts()
	}, [])

	return (
		<>
			<h1>Posts</h1>
			<section className='posts'>
				{posts.length > 0 &&
					posts
						.slice(0, 9)
						.map(post => (
							<PostItem key={post.id} title={post.title} id={post.id} />
						))}
			</section>
		</>
	)
}
