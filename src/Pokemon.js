class Pokemon {
  constructor(data) {
    // this.id = data.id;
    // this.name = data.name;
    // this.sprite = data.sprites.front_default;
    // this.type = data.types[0].type.name;
    this.id = data.data.id;
    this.name = data.data.nom_fr;
    this.sprite = "http://www.ray0.be/pokeapi/pokemon-img/fr/"+data.data.nom_fr;
    this.type1 = data.data.type1;
    this.type2 = data.data.type2;
  }
}

export default Pokemon;
