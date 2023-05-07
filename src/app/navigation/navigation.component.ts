import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  orginization: any;
  user: any;
  manus: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.orginization = this.auth.getOrginization;
    this.user = this.auth.currentUser;
    this.getMenu();
    if (!this.auth.authenticated) {
      this.router.navigate(['/auth/sigin']);
    }
    
  }
  getMenu(){
    this.auth.getAllMenus()
    .subscribe((data)=>{
      this.manus = data;
    },
    (error)=>{
      console.log(error);
    });
  }

  logout() {
    this.auth.signOut()
      .subscribe(
        (data) => {
          localStorage.removeItem('currentUser');
          localStorage.removeItem('token');
          this.router.navigate(['/auth/sigin']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
