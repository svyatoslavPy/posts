import { Routes, Route } from 'react-router-dom'
import { HomePage, PostsPage, AboutUsPage, PostPage } from './pages/index'
import { NotFoundPage } from './pages/NotFoundPage'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/posts/:id' element={<PostPage />} />
			<Route path='/about-us' element={<AboutUsPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
