import { Header } from '../components/Header'
import { MainLayout } from '../layouts/MainLayout'
import { Posts } from '../components/Posts'

export const PostsPage = () => {
	return (
		<>
			<Header />
			<MainLayout>
				<Posts />
			</MainLayout>
		</>
	)
}
