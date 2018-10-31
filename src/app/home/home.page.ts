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
    trigger('myAwesomeAnimation', [
      transition(':enter', group([
        query('#C', animate('1000ms 250ms ease', style({
          transform: 'rotate(-15deg)'
        }))),
      ]))
    ])
  ],
})
export class HomePage implements OnInit, AfterViewInit {
  private wheel: ElementRef;

  @HostBinding('@myAwesomeAnimation')

  public animateProfile = true;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wheel = this.elRef.nativeElement.querySelector('#root');
  }
}
