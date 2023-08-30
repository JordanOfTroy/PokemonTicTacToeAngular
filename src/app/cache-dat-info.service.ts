import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CacheDatInfoService {

  constructor() { }

  player1: Player = new Player
  player2: Player = new Player

  savePlayerData(player: Player) {
    if (player.id == 1) {
      this.player1 = player
    } else {
      this.player2 = player
    }
    console.log('player 1 ID:', this.player1.id)
    console.log('player 1 URL:', this.player1.spriteURL)
    console.log('player 2 ID:', this.player2.id)
    console.log('player 2 URL:', this.player2.spriteURL)
  }
  
}
