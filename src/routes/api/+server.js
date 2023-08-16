import faker from 'faker';
import { json } from '@sveltejs/kit';

const generateCovers = () =>
	[...Array(50)].map(() => {
		const lastName = faker.name.lastName();
		return { avatar: `https://avatars.dicebear.com/api/human/${lastName}.svg`, lastName };
	});

export function GET() {
	return json(generateCovers());
}
