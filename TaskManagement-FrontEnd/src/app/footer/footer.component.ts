import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  
  constructor(private elementRef:ElementRef) {};

  ngOnInit() {
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.src = "https://www.dallascounty.org/web_resources/cm/jslib/jquery.js";
//     this.elementRef.nativeElement.appendChild(s);

//     var x = document.createElement("script");
//     x.type = "text/javascript";
//     x.src = "https://www.dallascounty.org/web_resources/themes/www-dallascounty-org/js/footer.js";
//     this.elementRef.nativeElement.appendChild(x);
  }
}
