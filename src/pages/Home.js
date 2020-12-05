import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
	//fetches game data
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);

	//get data back
	const { popular, newGames, upcoming } = useSelector(state => state.games);
	console.log(popular);
	return (
		<GameList>
			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map(gameInfo => (
					<Game
						name={gameInfo.name}
						releaseDate={gameInfo.released}
						id={gameInfo.id}
						image={gameInfo.background_image}
						key={gameInfo.id}
					/>
				))}
			</Games>
		</GameList>
	);
};

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;

export default Home;
