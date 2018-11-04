import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
 } from '@angular/core';

import {
  AnimationBuilder,
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
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit, AfterViewInit {

  @ViewChild('rotate_b') bRotateEl: ElementRef;
  @ViewChild('rotate_c') cRotateEl: ElementRef;

  private bIntervalRad: number = 15 * Math.PI / 180;
  private cIntervalRad: number = 30 * Math.PI / 180;

  public bRadians = 0;
  public cRadians = 0;

  private bPlayer;
  private cPlayer;

  constructor(private animBuilder: AnimationBuilder) { }

  ngOnInit() { }

  ngAfterViewInit() { }

  rotateB(): void {
    const animateB = this.animBuilder.build([
      animate(`300ms ease`, style({
        transform: `rotate(${this.bRadians}rad)`
      }))
    ]);

    this.bPlayer = animateB.create(this.bRotateEl.nativeElement);
    this.bPlayer.onStart((evt) => {
      console.log('B ANIMATION START', evt);
      console.log(`bRadians: ${this.bRadians}`);
      console.log(`bRotateEl: ${this.bRotateEl.nativeElement}`);
    });
    this.bPlayer.onDone((evt) => {
      console.log('B ANIMATION DONE', evt);
      console.log(`bRadians: ${this.bRadians}`);
    });
    this.bPlayer.play();
  }

  rotateC(): void {
    const animateC = this.animBuilder.build([
      animate(`150ms ease`, style({
        transform: `rotate(${this.cRadians}rad)`
      }))
    ]);

    this.cPlayer = animateC.create(this.cRotateEl.nativeElement);
    this.cPlayer.onStart((evt) => {
      console.log('C ANIMATION START', evt);
      console.log(`cRadians: ${this.cRadians}`);
    });
    this.cPlayer.onDone((evt) => {
      console.log('C ANIMATION DONE', evt);
      console.log(`cRadians: ${this.cRadians}`);
    });
    this.cPlayer.play();
  }

  rotateBLeft(event) {
    this.bRadians -= this.bIntervalRad;
    Math.max(this.bRadians, -2.0 * Math.PI);
    console.log(this.bRadians);
    this.rotateB();
  }
  rotateBRight(event) {
    this.bRadians += this.bIntervalRad;
    Math.min(this.bRadians, 2.0 * Math.PI);
    console.log(this.bRadians);
    this.rotateB();
  }
  rotateCLeft(event) {
    this.cRadians -= this.cIntervalRad;
    Math.max(this.cRadians, -2.0 * Math.PI);
    console.log(this.cRadians);
    this.rotateC();
  }
  rotateCRight(event) {
    this.cRadians += this.cIntervalRad;
    Math.min(this.cRadians, 2.0 * Math.PI);
    console.log(this.cRadians);
    this.rotateC();
  }
}
