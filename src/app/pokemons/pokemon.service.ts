import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import {PagedData} from '../models/page-data-model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

url = 'http://51.75.122.159:3000/pokemons';

  constructor(private http:HttpClient) { }

  getPokemons(){
    return this.http.get<PagedData<Pokemon>>(this.url);
  }

  getPokemonDetails(id: number){
    const url=`${this.url}/${id}`;
    return this.http.get<Pokemon>(url);
  }
}
