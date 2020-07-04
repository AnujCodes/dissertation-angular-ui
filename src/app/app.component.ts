import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvoiceApp';
  logoPath: any;
  ngOnInit(): void {
    this.logoPath = 'https://stage.cxm-salescloud.com/modules/shell/shell-ui/assets/sap-logo-svg.svg';
  }
}
