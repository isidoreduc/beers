import React from 'react';
import { Item, Button, Segment, Label } from 'semantic-ui-react';
import { IBeer } from '../app/models/Beer';

interface IProps {
	beers: IBeer[];
	newSelBeer: (id: string) => void;
}

const BeerList: React.FC<IProps> = ({ beers, newSelBeer }) => {
	return (
		<Segment clearing>
			<Item.Group divided>
				{beers.map((beer, index) => (
					<Item key={index}>
						<Item.Content>
							<Item.Header style={{ color: 'teal' }}>{beer.name}</Item.Header>
							<Item.Meta>
								<span style={{ marginRight: '2rem' }}>{beer.country}</span>
								<span
									style={{
										marginRight: '2rem',
										color: 'white',
										backgroundColor: 'teal'
									}}
								>
									{beer.price} kr.
								</span>
							</Item.Meta>
							<Item.Description>{beer.description}</Item.Description>
							<Item.Extra>
								<Button
									onClick={() => newSelBeer(beer.id)}
									floated='right'
									content='More'
									secondary
									inverted
								/>
								<Label
									size='tiny'
									as='a'
									tag
									content={beer.category}
									style={{ margin: '0 1rem' }}
								/>
							</Item.Extra>
						</Item.Content>
					</Item>
				))}
			</Item.Group>
		</Segment>
	);
};

export default BeerList;
