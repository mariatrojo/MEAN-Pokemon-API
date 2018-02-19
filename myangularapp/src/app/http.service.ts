import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { 
	  this.getPokemon();
	  this.getPokemonData();
	  this.getAbilitiesData();
  }

  getPokemon(){
	let jigglypuff = this._http.get('https://pokeapi.co/api/v2/pokemon/39/');
	jigglypuff.subscribe(data => console.log("Got Jigglypuff!", data));
  }

  getAbilitiesData(){ 
	let abilitiesData = this._http.get('https://pokeapi.co/api/v2/ability/56/');
	abilitiesData.subscribe(data => console.log(${data.pokemon.length} Pokemon have the cute-charm ability.));
  }

  getPokemonData(){
	let interestingData = this._http.get('https://pokeapi.co/api/v2/pokemon/39');
	interestingData.subscribe(data => 
		for (var i = 0; i < data.abilities.length; i++){
			console.log(data.name, "'s ability is", data.abilities[i].ability.name}));
}
}
