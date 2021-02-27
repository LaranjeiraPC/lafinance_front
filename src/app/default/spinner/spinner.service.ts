import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spinner } from 'src/app/model/spinner.model';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private static spinner = new Spinner();
  private static observable : BehaviorSubject<Spinner> = new BehaviorSubject<Spinner>(SpinnerService.spinner);
  
  constructor() { }

  get():BehaviorSubject<Spinner>{
    return SpinnerService.observable;
  }
  
  setAlert(status: string, message: string, refresh: boolean) {
    SpinnerService.spinner.message = message;
    SpinnerService.spinner.status = status;
    SpinnerService.spinner.refresh = refresh;
    SpinnerService.observable.next(SpinnerService.spinner);
  }

  setClean(){
    SpinnerService.spinner.message = "";
    SpinnerService.spinner.status = "";
    SpinnerService.spinner.refresh = false;
    SpinnerService.observable.next(SpinnerService.spinner);
  }

}
