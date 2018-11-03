import { Component, OnInit, HostBinding, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  stagger,
  query
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('bAnimation',[
         state('b_left',style({
            transform : 'rotate(0deg)'
         })),
         state('b_right',style({
            transform : 'rotate(15deg)'
         })),
         transition('* <=> *', animate('500ms ease-in')),
      ]),
      trigger('cAnimation',[
        state('c_left',style({
           transform : 'rotate(0deg)'
        })),
        state('c_right',style({
           transform : 'rotate(30deg)'
        })),
        transition('c_left <=> c_right', animate('500ms ease-in')),
     ])
  ],
})
export class HomePage implements OnInit, AfterViewInit {
  private wheel: ElementRef;

  private bIntervalDegrees: number = 15;
  private cIntervalDegrees: number = 30;

  public bDegrees: number = 0;
  public cDegrees: number = 0;

  public animateProfile = true;
  
  constructor(private elRef: ElementRef) {
    
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wheel = this.elRef.nativeElement.querySelector('#root');
  }

  public b_state: string = "b_left";
  public c_state: string = "c_left";

  rotateBLeft(event) {
    console.log(event);
    this.b_state = "b_left";
    this.bDegrees -= this.bIntervalDegrees;
  }
  rotateBRight(event) {
    console.log(event);
    this.b_state = "b_right";
    this.bDegrees += this.bIntervalDegrees;
  }
  rotateCLeft(event) {
    console.log(event);
    this.c_state = "c_left";
    this.cDegrees -= this.cIntervalDegrees;
  }
  rotateCRight(event) {
    console.log(event);
    this.c_state = "c_right";
    this.cDegrees += this.cIntervalDegrees;
  }
}
