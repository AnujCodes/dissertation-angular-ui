import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoiceColumns:any;
  invoiceItems:any;
  constructor(private invoiceService:InvoiceService) { }

  ngOnInit(): void {
    this.invoiceColumns=this.invoiceService.getItemColumns()
    this.invoiceService.getInvoiceItems().subscribe((data)=>{
      this.invoiceItems=data;
    })
  }

  onApproveClicked(invoiceItem){
    console.log("in onApproveClicked")
    console.log(invoiceItem.id);
    this.invoiceService.approveRequest(invoiceItem);
  }

}
