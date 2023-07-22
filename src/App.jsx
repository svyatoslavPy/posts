import { Routes, Route } from 'react-router-dom'
import { HomePage, PostsPage, AboutUsPage, PostPage } from './pages/index'
import { NotFoundPage } from './pages/NotFoundPage'
import { Header } from './components/Header'
import { MainLayout } from './layouts/MainLayout'

export const App = () => {
	return (
		<>
			<Header />
			<MainLayout>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/posts' element={<PostsPage />} />
					<Route path='/posts/:id' element={<PostPage />} />
					<Route path='/about-us' element={<AboutUsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</MainLayout>
		</>
	)
}
