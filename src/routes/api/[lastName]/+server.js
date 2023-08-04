import { json } from '@sveltejs/kit';
import faker from 'faker';

export function GET({ params }) {
	const { lastName } = params;
	return json({
		lastName,
		firstName: faker.name.firstName(),
		avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`,
		title: faker.name.title(),
		phone: faker.phone.phoneNumber(),
		email: faker.internet.email()
	});
}
