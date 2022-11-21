import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pole-star-test';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/profile');
    // this.activatedRoute.data.subscribe((response: any) => {
    //   if (response['results'].length) {
    //     response['results'].forEach((proflie) => {
    //       this.profileData.push(proflie);
    //     });
    //   }
    //   console.log('this.profileData ==>', this.profileData);
    // });
  }
}
