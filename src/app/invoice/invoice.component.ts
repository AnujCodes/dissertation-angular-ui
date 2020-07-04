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
    // this.invoiceService.getInvoiceItems().subscribe((data)=>{
    //   this.invoiceItems=data;
    //   for(let i=0;i<this.invoiceItems.length;i++){
    //     this.invoiceItems[i].timestamp 
    //     = new Date(this.invoiceItems[i].timestamp).toLocaleString();
    //     console.log(this.invoiceItems[i].timestamp);
    //   }
    // })
    this.invoiceItems = this.invoiceService.getInvoiceItems()
  }

  onApproveClicked(invoiceItem){
    console.log("in onApproveClicked")
    console.log(invoiceItem.documentId)
  }

}
