import React from 'react';
import styled from 'styled-components';

const SelectCharacterContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;

	.select-character-container .character-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
		grid-row-gap: 15px;
	}

	.character-grid .character-item {
		display: flex;
		flex-direction: column;
		position: relative;
		justify-self: center;
		align-self: center;
	}

	.character-item img {
		height: 300px;
		width: 350px;
		border-radius: 10px;
		object-fit: cover;
	}

	.character-item .name-container {
		position: absolute;
		background-color: #838383;
		border-radius: 5px;
		margin: 10px;
	}

	.character-item .name-container p {
		margin: 0;
		padding: 5px 10px 5px 10px;
		font-weight: bold;
	}

	.character-item .character-mint-button {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 40px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		border: none;
		cursor: pointer;
		background-color: rgb(32, 129, 226);
		color: white;
		font-weight: bold;
		font-size: 16px;
	}
`;

const SelectCharacter = ({ setCharacterNFT }: any) => {
	return (
		<SelectCharacterContainer>
			<h2>Mint Your Hero. Choose wisely.</h2>
		</SelectCharacterContainer>
	);
};

export default SelectCharacter;
