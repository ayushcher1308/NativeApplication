import { Component, OnInit } from '@angular/core'; 
import { Teams } from '../../list'; 
import { TeamService } from '../../Services/team.service'; 
import { Router, ActivatedRoute } from '@angular/router'; 
import { DataService } from '../../Services/data.service'; 
import { ListViewEventData } from 'nativescript-ui-listview'; 
import { View } from 'tns-core-modules/ui/core/view'; 
import * as dialogs from "tns-core-modules/ui/dialogs";
// import { RouterExtensions } from 'nativescript-angular/router';
 

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
    action;
    bar:boolean;
   
  constructor(public teamService: TeamService,
    private router:Router,
    private route:ActivatedRoute,
    private storeData:DataService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      // console.log(this.route.snapshot.queryParamMap.get('refresh'));
      // if(this.route.snapshot.queryParamMap.get('refresh') == 'true'){
      this.getTeams();
      console.log("fuck yeah");
    })
    this.getTeams();
    this.bar = true;
    
  }
  // ngAfterViewInit(){
  //   console.log("viewinit");
  // }

 
  onSelect(teamName:string,amount:string,i:string): void {
    // this.selectedTeam = detail;
    console.log(i);
    // this.storeData.setScope(detail,i);
    // console.log(detail);
    this.router.navigate(['teams/team',i], {
      queryParams: { 'refresh':false,'team_name': teamName, 'amount': amount }
    });
    
  }


  onSelectlist(args) {

    this.bar = false;
    console.log(this.bar);
    this.selectedTeam = this.details[args.index];
    //  console.log(this.selectedTeam);
      //  require( "nativescript-localstorage" );
      //     localStorage.setItem('team_data',JSON.stringify(this.selectedTeam));
      // this.storeData.setScope(JSON.stringify(this.selectedTeam),args.index);    
      this.router.navigate(['team',args.index], {
        queryParams: { 'refresh':false,'team_name': this.selectedTeam.team_name, 'amount': this.selectedTeam.amount }
      });
    
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
      console.log("refreshing");
    });
  }
  
  // public onPullToRefreshInitiated(args: any) { }

  // public onSwipeCellStarted(args: ListViewEventData) { }

  // public onDelete() { }

  // public onArchive() { }
  public onCellSwiping(args: ListViewEventData) { 
    const swipeLimits = args.data.swipeLimits; 
    const currentItemView = args.object; 
    if (args.data.x < -200) { 
    console.log('Notify perform right action'); 
    } 
    } 
    public onSwipeCellStarted(args: ListViewEventData) { 
    const swipeLimits = args.data.swipeLimits; 
    const swipeView = args['object']; 
    const rightItem = swipeView.getViewById<View>('delete-view'); 
    swipeLimits.right = rightItem.getMeasuredWidth(); 
    swipeLimits.threshold = rightItem.getMeasuredWidth() ; // 2; 
    } 
    public onSwipeCellFinished(args: ListViewEventData) { 
    } 


    public onRightSwipeClick(args) { 
      console.log('Right swipe click'); 
      // console.log(this.teams); 
      let dataa = { 
      team_id : this.details[this.details.indexOf(args.object.bindingContext)].team_id 
      }; 
      console.log(dataa.team_id); 
      this.teamService.deleteTeam(dataa).subscribe(response => { 
      console.log(response); 
      // tslint:disable-next-line: triple-equals 
      if (response && response.status == 200) { 
      console.log('H121'); 
      // alert('Hello World'); 
      // this.router.navigate(['/list']); 
      this.getTeams(); 
      } 
      }); 
      }
  
public onPullToRefreshInitiated(args: any) { 

console.log("refresh"); 
this.getTeams(); 
var radListView = args.object; 
setTimeout(() => { 
radListView.notifyPullToRefreshFinished(); 
}, 500);}


}


