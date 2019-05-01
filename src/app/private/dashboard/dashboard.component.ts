import { Component, OnInit } from '@angular/core';
import { Teams } from '../../list';
import { TeamService } from '../../Services/team.service';
import { Router } from '@angular/router';
import { DataService } from '../../Services/data.service';
// import { ListViewEventData, RadListView } from "nativescript-telerik-ui/listview";
// import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
// import { View } from 'ui/core/view';
// import * as Utils from "utils/utils";
// import * as FrameModule from "ui/frame";
// import * as Toast from 'nativescript-toast';
// import { ListViewEventData } from "nativescript-ui-listview"; 
// import { RadListViewComponent } from "nativescript-ui-listview/angular"; 
// import { View } from 'tns-core-modules/ui/core/view'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Hero: {
    id: number;
    name: string;
  };
    details: Teams[] ;
    teams = [];
    totalAmount: any;
    selectedTeam: Teams;
   
  constructor(public teamService: TeamService,
    private router:Router,
    private storeData:DataService) { }

  ngOnInit() {
    this.getTeams();
  }
  onSelect(detail: Teams,teamName:string,amount:string,i:string): void {
    this.selectedTeam = detail;
    console.log(i);
    this.storeData.setScope(detail,i);
    console.log(detail);
    this.router.navigate(['teams/team',i], {
      queryParams: { 'team_name': teamName, 'amount': amount }
    });
    
  }


  onSelectlist(args) {
    
    this.selectedTeam = this.details[args.index];
    // console.log(this.selectedTeam);
      //  require( "nativescript-localstorage" );
      //     localStorage.setItem('team_data',JSON.stringify(this.selectedTeam));
      this.storeData.setScope(JSON.stringify(this.selectedTeam),args.index);    
     this.router.navigate(['/teamDetails'])
    
  }

  getTeams() {
    this.teamService.getTeams().subscribe(response => {
      // console.log(response);
      if (response && response.status === 200) {
        this.details = response.data;
        // console.log(this.details);
          this.totalAmount = this.details.reduce((previous, current) => previous + current.amount, this.details[0].amount);
        // console.log(this.details);
        // console.log("ayush");
      }
      // } else if (response && response.status === 401) {
      //   this.logout();
      // }

    });
  }
  
  // public onPullToRefreshInitiated(args: any) { }

  // public onSwipeCellStarted(args: ListViewEventData) { }

  // public onDelete() { }

  // public onArchive() { }

  
  



}


