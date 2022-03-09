import { Injectable } from '@angular/core';

interface playerFromWeb {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
}
