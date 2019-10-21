import React, { useState } from 'react';
import {
	Segment,
	Form,
	FormInput,
	FormTextArea,
	ButtonGroup,
	Button
} from 'semantic-ui-react';
import { IBeer } from '../app/models/Beer';

interface IProps {
	setEditBeer: (editBeer: boolean) => void;
	selBeer: IBeer;
	createBeer: (beer: IBeer) => void;
	updateBeer: (beer: IBeer) => void;
}

const BeerForm: React.FC<IProps> = ({
	setEditBeer,
	selBeer,
	createBeer,
	updateBeer
}) => {
	const initializeForm = () => {
		return selBeer
			? selBeer
			: {
					id: '',
					name: '',
					description: '',
					category: '',
					price: 0,
					country: ''
			  };
	};
	const [beer, setBeer] = useState(initializeForm);

	const handleSubmit = () => {
		if (beer.id.length === 0) {
			let newBeer = {
				...beer
			};
			createBeer(newBeer);
		} else {
			updateBeer(beer);
		}
	};

	const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		setBeer({ ...beer, [name]: value });
	};

	return (
		<Segment>
			<Form>
				<FormInput
					placeholder='Name'
					value={beer.name}
					name='name'
					onChange={handleInputChange}
				/>
				<FormTextArea
					rows={2}
					placeholder='Description'
					value={beer.description}
					name='description'
					onChange={handleInputChange}
				/>
				<FormInput
					placeholder='Category'
					value={beer.category}
					name='category'
					onChange={handleInputChange}
				/>
				<FormInput
					placeholder='Price'
					value={beer.price}
					name='price'
					onChange={handleInputChange}
				/>
				<FormInput
					placeholder='Country'
					value={beer.country}
					name='country'
					onChange={handleInputChange}
				/>

				<ButtonGroup fluid>
					<Button onClick={handleSubmit} color='teal'>
						submit
					</Button>
					<Button.Or />
					<Button onClick={() => setEditBeer(false)} color='grey'>
						cancel
					</Button>
				</ButtonGroup>
			</Form>
		</Segment>
	);
};

export default BeerForm;
