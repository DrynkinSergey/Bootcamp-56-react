export const Section = ({ sectionTitle = 'Default section', data = [] }) => {
	console.log(data)
	//undefined.map()
	return (
		<section>
			<h1>{sectionTitle}</h1>
			<ul>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
			<hr />
		</section>
	)
}
