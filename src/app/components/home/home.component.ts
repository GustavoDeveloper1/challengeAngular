import { PlayersService } from './../../services/players.service';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Players } from '../../Interface/Players';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  players!: Players[];

  constructor(private service:PlayersService) { }


  ngOnInit(): void {
    
    this.service.listPlayers().subscribe(dados=> this.players = dados)
  
      console.log(this.players)
  
  }


  
  // OnChanges(): void {
  //   console.log(this.players)
  // }

 


}
