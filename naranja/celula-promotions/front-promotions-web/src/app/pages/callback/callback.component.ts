import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.navigate(['/todas'], { replaceUrl: true });
  }
}
