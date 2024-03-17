import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className=" items-center gap-5 pt-5 text-sm md:grid-cols-2">
			<Search />
			
		</div>
	);
};
