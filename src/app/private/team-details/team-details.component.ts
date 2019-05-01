import { Component, OnInit, Input } from '@angular/core';
import { Teams } from '../../list';
import { DataService } from '../../Services/data.service';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TeamService } from '../../Services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { isAndroid, isIOS } from 'tns-core-modules/ui/page/page';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  details: Teams[];
  teams = Teams;
  @Input() detail: Teams;
  t:any = [];
  editForm:FormGroup;
  constructor(private getTeamData:DataService,
    private formBuilder:FormBuilder,
    private teamService:TeamService,
    private router:Router,
    private _route:ActivatedRoute) { }
  teamName;
  Amount;
  i;
  ngOnInit() {
    this.getTeam();
    this.getTeamList();
    this.editForm = this.formBuilder.group({
      teamName: [this.teamName,[Validators.required, Validators.email]],
      amount:[this.Amount,[Validators.required, Validators.minLength(6)]]
  });
    
  }

//   ngAfterViewInit(){
//     this.currentIndex = this.index.subscribe(() => {
//       console.log("index " + this.index);
//  })
//   }


getTeamList()
{
  this.teamService.getTeams().subscribe(response => {if (response && response.status === 200) {
    this.teams = response.data;}
})
}

getTeam()
{
  this.t = this.getTeamData.getScope();
  this.teamName =  this._route.snapshot.queryParamMap.get('team_name');
  console.log(this._route.snapshot.queryParamMap.get('team_name'));
  this.Amount = this._route.snapshot.queryParamMap.get('amount');
}

update()
{ 
    console.log("update");
    this.i = this.getTeamData.getIndex();
    let data = {
       team_id: this.teams[this.i].team_id,
      team_name:this.editForm.get('teamName').value,
      amount: this.editForm.get('amount').value
    };
    
    this.teamService.updateTeam(data).subscribe(response => {
      if (response && response.status == 200) {
        alert("Updated Succesfully");
        this.teams[this.i].team_name = data.team_name;
        this.teams[this.i].amount = data.amount;
      }
    });
    // console.log(this.teams[this.i].team_name);
    
this.router.navigate(['teams']);
  
}

updateTeam(amount,team_name)
{
     
    this.i = this.getTeamData.getIndex();
    let data = {
       team_id: this.teams[this.i].team_id,
      team_name:team_name,
      amount: amount
    };

    console.log(data.team_name);
    
    this.teamService.updateTeam(data).subscribe(response => {
      // 
      if (response && response.status == 200) {
        alert("Updated Succesfully");
        this.teams[this.i].team_name = data.team_name;
        this.teams[this.i].amount = data.amount;
        location.reload();
      }
    });
    // console.log(this.teams[this.i].team_name);  
}

delete(s)
{
  this.i = this.getTeamData.getIndex();
  let data = {
    team_id: this.teams[this.i].team_id
 };
 this.teamService.deleteTeam(data).subscribe(response =>{
      console.log(response);
      location.reload();
 });

}


 
}



