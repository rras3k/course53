export default async function Identification() {
	let data = await fetch(
		'https://api.laval-test.algozzy.ovh/identification'
		, {
			method: 'POST',
			body: '{"login":"artaxi", "password":"6808", "version_app_mobile":"1.0.0"}'
		}
	)
	let posts = await data.json()
	return (
		<>
		Message: { posts.message }
	{ JSON.stringify(posts) }
	</>
	)
}
