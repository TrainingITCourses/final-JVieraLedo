import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'jvl-launches-card',
  templateUrl: './launches-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesCardComponent implements OnInit {
  @Input() public launch: any = [];

  constructor() {
  }

  ngOnInit() {
    console.log('Launches-Card_ngOnInit');
  }
}
