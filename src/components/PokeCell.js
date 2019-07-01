import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';


const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  // url() permet d'aller chercher les images
  // ${} permet d'aller chercher une variable dedans : '../assets/sprites.png'
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};


export default PokeCell;
