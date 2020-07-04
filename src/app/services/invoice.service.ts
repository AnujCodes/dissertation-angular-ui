import { Injectable } from '@angular/core';
import { HttpUtil } from '../util/httpUtil';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  httpUtil:HttpUtil;

  constructor(private httpClient:HttpClient) { 
    this.httpUtil=new HttpUtil();
  }

  getItemColumns(){
    return [
       {colKey: "documentId" , display : "Delivery Note ID"},
       {colKey: "timestamp" , display : "Timestamp"},
       {colKey: "totalQuantity" , display : "Total Quantity"}
   ]
   }

   getInvoiceItems(){
    // let url:string=this.httpUtil.invoiceBaseURL+this.httpUtil.getInvoiceURLPattern;
    // return this.httpClient.get(url,{headers:this.httpUtil.headers});
    return [
         {
            "rowId":1,
            "documentId":"e7324202-5154-4de1-a56e-d1f486e7a47d",
            "timestamp":"2020-06-15T13:19:05Z",
            "totalQuantity":10,
            "unitOfMeasure":"units",
            "totalCost":100,
            "startDate":"2020-03-19",
            "items":[
               {
                  "itemId":"111",
                  "quantity":10,
                  "price":100,
                  "unitOfMeasure":"units"
               }
            ],
            "reversed":false
         }]
  }
}
