import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.less']
})
export class ViewDetailComponent implements OnInit {
  pan_no:string
  constructor(private _routeParameter : ActivatedRoute) { }

  ngOnInit() {
    this.pan_no = this._routeParameter.snapshot.params['pan_no'];
    
  }


}
