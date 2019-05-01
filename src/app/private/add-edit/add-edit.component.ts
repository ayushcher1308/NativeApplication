import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private _route:ActivatedRoute) { }

  addTeamForm: FormGroup; 

  ngOnInit() {
    this.addTeamForm = this.formBuilder.group({ 
      teamName: [this._route.snapshot.queryParamMap.get('team_name'), Validators.required], 
      revenue: [this._route.snapshot.queryParamMap.get('amount'), Validators.required] 
      }); 
  }

}
