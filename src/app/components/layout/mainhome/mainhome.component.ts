import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){

      // $('#itemslider').carousel({ interval: 3000 });
      
      $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
      
      for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();
      
      if (!itemToClone.length) {
      itemToClone = $(this).siblings(':first');
      }
      
      itemToClone.children(':first-child').clone()
      .addClass("cloneditem-"+(i))
      .appendTo($(this));
      }
      });
      });
      
  }

}
