export const MainLayout = ({
	children
}) => {
	return (
		<main className="main">
			<div className="container">
				{children}
			</div>
		</main>
	)
}