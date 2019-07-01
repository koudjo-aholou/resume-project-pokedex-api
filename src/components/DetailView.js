import React from 'react';
import './styles/DetailView.css';

const DetailView = ( {pokemon}) => {
  const {id, name, sprite, type1, type2} = pokemon;

// Condition si type2 null alors n'affiche pas
var className = "";
var labelType = "labelType";
var typeClass="";
var typeClass2="";

  if(type2 == null) {
  className = 'char-none';
  }
  else { className = 'data-char';
}

// Condition couleur en fontion du type du pokemon

if (type1 === "Feu" || type2==="Feu") {
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Plante" || type2==="Plante"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Eau" || type2==="Eau"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Poison" || type2==="Poison"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}

else if (type1 === "Insecte" || type2 === "Insecte"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Normal" || type2 === "Normal"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Vol" || type2 === "Vol"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Combat" || type2 === "Combat"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Électrik" || type2 === "Électrik"){
 typeClass= 'typeClass'+type1;
 typeClass2= 'typeClass'+type2;
}
else if (type1 === "Glace" || type2 === "Glace"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Sol" || type2 === "Sol"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Psy" || type2 === "Psy"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Roche" || type2 === "Roche"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Spectre" || type2 === "Spectre"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Dragon" || type2 === "Dragon"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Ténèbres" || type2 === "Ténèbres"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}
else if (type1 === "Acier" || type2 === "Acier"){
  typeClass= 'typeClass'+type1;
  typeClass2= 'typeClass'+type2;
}


  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt={name}/>
      <div className='data-wrapper'>
        <span className='data-id'>No. {id}</span>
        <h1 className='data-name'> {name}</h1>
        <p className='data-char'> Type 1: <span className={typeClass+" "+labelType}>{type1}</span></p>
        <p className={className}> Type 2: <span className={typeClass2+" "+labelType}>{type2}</span></p>

      </div>
    </section>
  )
}

export default DetailView;
