import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent
 {
   cells:string[]=Array(10).fill(null);
   playerSymbol:string='X';

   onGridCellClick(index:number):void
   {
    this.cells[index]=this.playerSymbol;
    if(this.playerSymbol=='X'){this.playerSymbol='0';}
    else{this.playerSymbol='X';}
   }
}
