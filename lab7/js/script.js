document.addEventListener('DOMContentLoaded', () => {
	const downloadBtn = document.querySelector('.js-download');
	const users = document.querySelector('.js-users');

	const fetchData = async () => {
		const response = await fetch('https://randomuser.me/api');
		const data = await response.json();
		
		return data;
	}

	downloadBtn.addEventListener('click', () => {
		fetchData().then((data) => {
			const { results } = data;
			let html = '';

			results.forEach(({ name, gender, location, picture }) => {
				html = `
					<div class="user">
						<div class="photo">
							<img src="${ picture.large }"/>
						</div>
						<div>Name: ${ name.title } ${ name.first } ${ name.last }</div>
						
						<div>Gender: ${ gender }</div>
						<div>Lat: ${ location.coordinates.latitude }, Lon: ${ location.coordinates.longitude }</div>
						<div>Timezone: ${ location.timezone.offset }, ${ location.timezone.description }</div>
						<div>Country: ${ location.country }</div>
						<div>State: ${ location.state }</div>
					</div>
				`
			});

			users.innerHTML = html;

		}).catch((error) => {
			console.log(error);
		})
	})
});
