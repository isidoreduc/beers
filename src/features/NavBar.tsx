import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

interface IProps {
	openNewBeer: () => void;
}

const NavBar: React.FC<IProps> = ({ openNewBeer }) => {
	return (
		<Menu secondary inverted color='teal' fixed='top'>
			<Container>
				<Menu.Item
					header
					style={{
						margin: '0 50px',
						fontFamily: 'Permanent Marker',
						fontSize: '20px'
					}}
				>
					colibeer
				</Menu.Item>
				<Menu.Item>
					<Button onClick={() => openNewBeer()} content='New Beer' />
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default NavBar;
