import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public todayDate: Date = new Date();
 // public routers: typeof routes = routes;

  constructor(
    
  ) { }
    ngOnInit(): void {
        
    }

  // public sendLoginForm(): void {
  //   this.service.login();

  //   this.router.navigate([this.routers.DASHBOARD]).then();
  // }

  // public sendSignForm(): void {
  //   this.service.sign();

  //   this.router.navigate([this.routers.DASHBOARD]).then();
  // }

}
