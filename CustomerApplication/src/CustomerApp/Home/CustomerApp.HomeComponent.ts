import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html'
})
export class HomeComponent {
  logger: BaseLogger = null;
/**
 *
 */
constructor(_injector : Injector) {
  this.logger = _injector.get('1');
  this.logger.Log();
}


}
