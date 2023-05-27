import {Component, OnInit} from '@angular/core';
import {DigitalCurrencyService} from "../../services/digitalcurrency.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currenciesForm!: FormGroup;
  coins: Array<any> = [];
  sortField: string = '';
  sort_dir: boolean = true;

  public current = 1;

  public itemsToDisplay: Array<any> = [];
  public perPage = 10;
  public total: number = 0;

  constructor(private digitalCurrency: DigitalCurrencyService, private fb: FormBuilder) {
  }


  initCurrencyForm() {
    this.currenciesForm = this.fb.group({
      filterBy: [null, {}]
    });

  }

  filter() {
    /*this.coins = this.coins.filter((item) => {
      item.symbol == this.currenciesForm.controls['filterBy'].value
    })*/

    if (this.currenciesForm.controls['filterBy'].value != '')
      this.itemsToDisplay = this.itemsToDisplay.filter((item: any) => {
        return item.name = this.currenciesForm.controls['filterBy'].value;
      });
    else {
      this.getCurrencies();
    }


  }


  ngOnInit(): void {
    this.initCurrencyForm();
    this.getCurrencies();
  }

  getCurrencies() {
    this.digitalCurrency.getAll(this.sortField, this.sort_dir).subscribe((info: any) => {
      this.coins = info['data'];
      this.total = Math.ceil(this.coins.length / this.perPage);

      this.itemsToDisplay = this.paginate(this.current, this.perPage);
    })
  }

  sort(event: any) {
    this.sort_dir = !this.sort_dir;
    // for external sort
    this.sortField = event.target.id;
    this.getCurrencies()


    // for local sorting
    /*
    let sortItem = event.target.id;
     if (sortItem == 'name') {
      this.coins = this.coins.sort((a, b) => a.name.toString().localeCompare(b.name));
    } else {
      this.coins = (sortItem in this.coins) ? this.coins.sort((a, b) => a[sortItem] - b[sortItem]) : this.coins.sort((a, b) => a.quote?.USD[sortItem] - b.quote?.USD[sortItem]);
    }*/


  }

  public onGoTo(page: number): void {
    this.current = page
  }

  public onNext(page: number): void {
    this.current = page + 1
  }

  public onPrevious(page: number): void {
    this.current = page - 1
  }

  public paginate(current: number, perPage: number): string[] {
    return [...this.coins.slice((current - 1) * perPage).slice(0, perPage)]
  }

}
