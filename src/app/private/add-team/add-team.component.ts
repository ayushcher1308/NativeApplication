import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../../Services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teams = []; 
  addTeamForm: FormGroup; 
  accessToken: String; 
  isSubmitted: boolean = false; 
  successMsg: boolean = false;
  constructor(private formBuilder:FormBuilder , private teamService:TeamService, private router:Router) { }

  ngOnInit() {
    this.addTeamForm = this.formBuilder.group({ 
      teamName: ['', Validators.required], 
      revenue: ['', Validators.required] 
      }); 
      
      
  }

  addTeam(){  
    if(this.addTeamForm.controls.teamName.valid && this.addTeamForm.controls.revenue.valid){ 
    let data = {team_name: this.addTeamForm.controls.teamName.value, amount: this.addTeamForm.controls.revenue.value}; 
    console.log(data); 
    this.teamService.addTeam(data).subscribe(response => { 
    console.log(response); 
    if (response && response.status === 401) {} 
     this.router.navigate(['/teams']);
    }); 
    } 
    
    
    } 

}
