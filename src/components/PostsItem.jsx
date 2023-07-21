import { useNavigate } from 'react-router-dom'

export const PostItem = ({ title, id }) => {
	const navigate = useNavigate()
	return (
		<div className='posts__item' onClick={() => navigate(`/posts/${id}`)}>
			<p>{title}</p>
		</div>
	)
}
