import { Injectable } from '@angular/core';
import { Goals } from '../goals';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }
  getGoals(){
    return Goals;
  }
}
