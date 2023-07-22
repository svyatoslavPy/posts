import { Header } from '../components/Header'
import { MainLayout } from '../layouts/MainLayout'

export const HomePage = () => {
	return (
		<>
			<Header />
			<MainLayout>
				<h1>Home</h1>
			</MainLayout>
		</>
	)
}
