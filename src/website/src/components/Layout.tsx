import dynamic from 'next/dynamic';
import { Grid, Box } from '@chakra-ui/react';

const Navbar = dynamic(() => import('~/components/Navbar'));

import { useQueryMe } from '~/hooks/useQueryMe';

const Layout = ({ children }: { children: React.ReactNode }) => {
	useQueryMe();

	return (
		<Grid templateRows="auto 1fr auto" h="100%">
			<Navbar />
			<Box>{children}</Box>
			<Box></Box>
		</Grid>
	);
};

export default Layout;
