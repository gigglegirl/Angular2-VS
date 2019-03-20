import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.less']
})
export class ViewDetailComponent implements OnInit {
  pan_no:string
  constructor(private _activatedRoutes : ActivatedRoute , private _router:Router) { }

  ngOnInit() {
    this.pan_no = this._activatedRoutes.snapshot.params['pan_no'];
    
  }

  completeList():void{
    this._router.navigate(['/employee'])
  }


}