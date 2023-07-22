import { MainLayout } from '../layouts/MainLayout'
import { Post } from '../components/Post'
import { Header } from '../components/Header'

export const PostPage = () => {
	return (
		<>
			<Header />
			<MainLayout>
				<Post />
			</MainLayout>
		</>
	)
}
