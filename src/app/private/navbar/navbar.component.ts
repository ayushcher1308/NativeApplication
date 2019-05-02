import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../../Services/team.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
    private teamService:TeamService) { }
bar;
but;
  ngOnInit() {
    this.bar = true;
    this.Title = 'Team Revenue';
    this.but = true;
  }
  Title;
  logout()
  {
    this.teamService.logout().subscribe(response => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['home']);
     
    });

  }
  add_team()
  {
    this.Title = 'Add New Record';
    this.but = false;
    this.router.navigate(['teams/team','null'], {
      queryParams: { 'team_name': null, 'amount': null }
    });
  }

}
