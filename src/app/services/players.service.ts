import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { Players } from '../Interface/Players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private readonly API = 'http://localhost:5000/jogadores'
  constructor(private http: HttpClient) { }

  listPlayers() {
    return this.http.get<Players[]>(this.API).pipe(
      delay(2000),
      tap(console.log)
    );
  }

}
