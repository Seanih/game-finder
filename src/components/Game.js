import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

const Game = ({ name, releaseDate, image, id }) => {
	const dispatch = useDispatch();

	const loadDetailHandler = () => {
		dispatch(loadDetail(id))
	}

	return (
		<StyledGame onClick={loadDetailHandler}>
			<h3>{name}</h3>
			<p>{releaseDate}</p>
			<img src={image} alt={name} />
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.4);
	text-align: center;
	border-radius: 1rem;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}
`;

export default Game;
