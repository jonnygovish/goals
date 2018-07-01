import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { Goals } from '../goals';
import { GoalService } from '../goals/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  providers:[GoalService],
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[];
  constructor(goalService:GoalService){
    this.goals = goalService.getGoals()
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete){
        this.goals.splice(index,1);
      }
    }
  }

  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }


  ngOnInit() {
  }
}