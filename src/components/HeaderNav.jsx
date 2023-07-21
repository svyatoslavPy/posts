import { Link } from 'react-router-dom'

export const HeaderNav = () => {
	return (
		<nav className='header-nav'>
			<Link to={'/'} className='header-nav__link'>
				Home
			</Link>
			<Link to={'/about-us'} className='header-nav__link'>
				About us
			</Link>
			<Link to={'/posts'} className='header-nav__link'>
				Posts
			</Link>
		</nav>
	)
}
