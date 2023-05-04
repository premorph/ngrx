import {  Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import {Store} from '@ngrx/store'
import { loadItems } from 'src/app/state/actions/item.actions';
@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  listItems: ItemModel[] = []

  constructor(
    private showCase: ShowCaseService,
    private store:Store
  ) {


  }

  ngOnInit(): void {
this.store.dispatch(loadItems())
    this.loadData()
  }

  loadData(): void {

    this.showCase.getDataApi()
      .subscribe((res) => {
        this.listItems = res

      })
  }

}
