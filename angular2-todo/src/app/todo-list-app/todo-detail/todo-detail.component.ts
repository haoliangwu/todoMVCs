import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap'
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class TodoDetailComponent implements OnInit {
  id: string

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        // just for resolve whole id string like 212 not 2,1,2
        return Promise.resolve(params.get('id'))
      })
      .subscribe((id: string) => {
        this.id = id
      })
  }

  viewList() {
    this.router.navigate(['../', { previousId: this.id }], { relativeTo: this.route })
  }

}
