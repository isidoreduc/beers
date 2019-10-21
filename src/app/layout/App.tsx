import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import BeerDashboard from '../../features/BeerDashboard';
import NavBar from '../../features/NavBar';
import { IBeer } from '../models/Beer';
import beerz from '../models/beers';

const App: React.FC = () => {
	const [beers, setBeers] = useState<IBeer[]>([]);
	const [selectedBeer, setSelectedBeer] = useState<IBeer | null>(null);
	const [editBeer, setEditBeer] = useState(false);

	const getNewSelectedBeer = (id: string) =>
		setSelectedBeer(beers.filter(item => item.id === id)[0]);

	const openCreateBeerButton = () => {
		setSelectedBeer(null);
		setEditBeer(true);
	};

	const handleCreateBeer = (beer: IBeer) => {
		setBeers([...beers, beer]);
		setSelectedBeer(beer);
		setEditBeer(false);
	};

	const handleEditBeer = (beer: IBeer) => {
		setBeers([...beers.filter(b => b.id !== beer.id), beer]);
		setSelectedBeer(beer);
		setEditBeer(false);
	};

	useEffect(() => {
		setBeers(beerz);
	}, []);

	return (
		<>
			<NavBar openNewBeer={openCreateBeerButton} />
			<Container style={{ marginTop: '7rem' }}>
				<BeerDashboard
					beers={beers}
					newSelBeer={getNewSelectedBeer}
					selBeer={selectedBeer}
					editBeer={editBeer}
					setEditBeer={setEditBeer}
					setSelectedBeer={setSelectedBeer}
					createBeer={handleCreateBeer}
					updateBeer={handleEditBeer}
				/>
			</Container>
		</>
	);
};

export default App;
