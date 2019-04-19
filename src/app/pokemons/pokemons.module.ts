import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { MatListModule, MatCardModule, MatGridListModule, MatChipsModule } from '@angular/material';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule, 
    MatListModule, 
    MatCardModule, 
    MatGridListModule,
    MatChipsModule
  ]
})
export class PokemonsModule { }
