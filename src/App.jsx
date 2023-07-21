import { Routes, Route } from 'react-router-dom'
import { MainPage, PostsPage, AboutUsPage, PostPage } from './components/index'
import { NotFoundPage } from './components/NotFoundPage'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/posts' element={<PostsPage />} />
			<Route path='/posts/:id' element={<PostPage />} />
			<Route path='/about-us' element={<AboutUsPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
