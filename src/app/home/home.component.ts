import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   slideIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }
  showSlides(){
     var i= 0;
    var slides = document.getElementsByClassName("mySlides");
    for ( i < slides.length; i++;) {
      //slides[i].hidden = false;
    }
  }
}
