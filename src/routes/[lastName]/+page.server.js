import faker from 'faker';

export async function load({ params }) {
	const { lastName } = params;

	return {
		user: {
			lastName,
			firstName: faker.name.firstName(),
			avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
			title: faker.name.title(),
			phone: faker.phone.phoneNumber(),
			email: faker.internet.email()
		}
	};
}
