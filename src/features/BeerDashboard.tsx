import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { IBeer } from '../app/models/Beer';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import BeerForm from './BeerForm';

interface IProps {
	beers: IBeer[];
	newSelBeer: (id: string) => void;
	selBeer: IBeer | null;
	editBeer: boolean;
	setEditBeer: (editBeer: boolean) => void;
	setSelectedBeer: (Beer: IBeer | null) => void;
	createBeer: (beer: IBeer) => void;
	updateBeer: (beer: IBeer) => void;
}

const BeerDashboard: React.FC<IProps> = ({
	beers,
	newSelBeer,
	selBeer,
	editBeer,
	setEditBeer,
	setSelectedBeer,
	createBeer,
	updateBeer
}) => {
	return (
		<Grid>
			<GridColumn width={10}>
				<BeerList beers={beers} newSelBeer={newSelBeer} />
			</GridColumn>
			<GridColumn width={6}>
				{/* only display details if selected Beer not null and not in edit mode*/}
				{selBeer && (
					<BeerDetails
						selBeer={selBeer}
						setEditBeer={setEditBeer}
						setSelectedBeer={setSelectedBeer}
					/>
				)}
				{/* displayed when in edit mode */}
				{/* a key to differentiate between the state of a selected Beer and a new Beer */}
				{editBeer && (
					<BeerForm
						setEditBeer={setEditBeer}
						selBeer={selBeer!}
						createBeer={createBeer}
						updateBeer={updateBeer}
						key={(selBeer && selBeer.id) || 0}
					/>
				)}
			</GridColumn>
		</Grid>
	);
};

export default BeerDashboard;
