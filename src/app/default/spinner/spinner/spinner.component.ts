import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from '../spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  spinnerSubscription: Subscription = new Subscription;
 
  private _status: string;
  private _message: string = "";
  _enable: boolean = false;
  _carregando: boolean = false;
  
  constructor(private _spinnerService: SpinnerService) { }
 
  ngOnInit(): void {
    this.spinnerSubscription = this._spinnerService.get().subscribe(data => {
      this._message = data.message;
      this._status = data.status;

      if(this._status != null && this._message != "" && this._message != null){
        this._enable = true;
        this.carregarAlert();
      }
    });
  }

  async carregarAlert(): Promise<void> {
    await this.delay(2000);
    this._enable = false;
    this._spinnerService.setClean();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

}
