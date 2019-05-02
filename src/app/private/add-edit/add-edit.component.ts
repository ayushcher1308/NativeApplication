import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../Services/team.service';
import { Teams } from '../../list';
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private _route:ActivatedRoute,
    private router:Router,
    private teamService:TeamService,
    private _page: Page) { }

  addTeamForm: FormGroup; 
  i;
  buttonType;
  delete:boolean=false;
  details: Teams[];
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal: ElementRef;
  ngOnInit() {
    this.button();
    this._page.actionBarHidden = true;
    this.addTeamForm = this.formBuilder.group({ 
      teamName: [this._route.snapshot.queryParamMap.get('team_name'), Validators.required], 
      revenue: [this._route.snapshot.queryParamMap.get('amount'), Validators.required] 
      }); 
    this.getTeamList();
    console.log("yes bro");  
  }


  getTeamList()
{
  this.teamService.getTeams().subscribe(response => {if (response && response.status === 200) {
    this.details = response.data;}
})
}

button()
{
  if(this._route.snapshot.queryParamMap.get('team_name')==null && this._route.snapshot.queryParamMap.get('amount')==null )
  {
    this.buttonType = 'Add Team';
    this.delete = false;
    console.log('addt');
  }
  else
  {
    this.buttonType = 'Update Team';
    this.delete = true;
    console.log('updat');
  }
}

  update_edit(){
    if(this._route.snapshot.queryParamMap.get('team_name')==null && this._route.snapshot.queryParamMap.get('amount')==null )
    {
      if(this.addTeamForm.controls.teamName.valid && this.addTeamForm.controls.revenue.valid){ 
        let data = {team_name: this.addTeamForm.controls.teamName.value, amount: this.addTeamForm.controls.revenue.value}; 
        console.log(data); 
        this.teamService.addTeam(data).subscribe(response => { 
        console.log(response); 
        if (response && response.status === 401) {alert("Session Expired");}
        // this.closeAddExpenseModal.nativeElement.click(); 
        //  location.reload();
         this.router.navigate(['/teams']);
        }); 
        }
    }
    else
    {
      this.buttonType = 'Update Team';
      // console.log("update");
    this.i = this._route.snapshot.paramMap.get('i');
    console.log(this.i);
    let data = {
      team_id: this.details[this.i].team_id,
      team_name:this.addTeamForm.get('teamName').value,
      amount: this.addTeamForm.get('revenue').value
    };
    
    this.teamService.updateTeam(data).subscribe(response => {
      console.log(response);
      if (response && response.status == 200) {
        
        this.details[this.i].team_name = data.team_name;
        this.details[this.i].amount = data.amount;
      }
    });
    // console.log(this.teams[this.i].team_name);
    // this.closeAddExpenseModal.nativeElement.click();    
      this.router.navigate(['teams']);
      // location.reload();
    }

  }

  deleteTeam(s)
{
  this.i = this._route.snapshot.paramMap.get('i');
  console.log(this.i);
  let data = {
    team_id: this.details[this.i].team_id
 };
 this.teamService.deleteTeam(data).subscribe(response =>{
      console.log(response);
      // location.reload();
 });
 this.closeAddExpenseModal.nativeElement.click();  
 this.router.navigate(['/teams']);

      //  location.reload();

}


}
