import React from 'react';
import { Card, Image, ButtonGroup, Button } from 'semantic-ui-react';
import { IBeer } from '../app/models/Beer';

interface IProps {
	selBeer: IBeer;
	setEditBeer: (editBeer: boolean) => void;
	setSelectedBeer: (Beer: IBeer | null) => void;
}

const BeerDetails: React.FC<IProps> = ({
	selBeer,
	setEditBeer,
	setSelectedBeer
}) => {
	return (
		<Card fluid>
			<Image src='' wrapped ui={false} />
			<Card.Content>
				<Card.Header>{selBeer.name}</Card.Header>
				<Card.Meta>
					<span style={{ marginRight: '3rem' }}>{selBeer.category}</span>
					<span style={{ color: 'white', backgroundColor: 'teal' }}>
						{selBeer.price} kr.
					</span>
				</Card.Meta>
				<Card.Description>{selBeer.description}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<ButtonGroup fluid>
					<Button onClick={() => setEditBeer(true)} color='teal'>
						edit
					</Button>
					<Button.Or />
					<Button onClick={() => setSelectedBeer(null)} color='grey'>
						cancel
					</Button>
				</ButtonGroup>
			</Card.Content>
		</Card>
	);
};

export default BeerDetails;
