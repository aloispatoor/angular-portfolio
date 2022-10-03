import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isFixedNavbar !: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menuBurger();
    // this.onWindowScroll();
  }

  @HostBinding('class.navbar-opened') navbarOpened = false;
  menuBurger(){
    this.navbarOpened = !this.navbarOpened;
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const desktopNavbar = document.querySelector('.desktopNav');
  //   const sticky = desktopNavbar?.getBoundingClientRect().top;
  //   if(scrollY >= sticky){
  //     this.isFixedNavbar = true;
  //   } else {
  //     this.isFixedNavbar = false;
  //   }
  // }

  onContinue(): void {
    this.router.navigateByUrl('');
  }

}