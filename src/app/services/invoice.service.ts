import { Injectable } from '@angular/core';
import { HttpUtil } from '../util/httpUtil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
       //{colKey: "employeeId" , display : "Employee ID"},
       {colKey: "invoiceId" , display : "Invoice ID"},
       {colKey: "category" , display : "Category"},
       {colKey: "invoiceDate" , display : "Invoice Date"},
       {colKey: "totalAmount" , display : "Total Amount"},
       {colKey: "currency" , display : "Currency"},
       {colKey: "vendor" , display : "Vendor"}
   ]
   }

   getInvoiceItems():Observable<any>{
    let url:string=this.httpUtil.invoiceBaseURL+this.httpUtil.getInvoiceURLPattern;
    let abc:Observable<any>=this.httpClient.get(url);
    return abc;
  }

  approveRequest(data: any): Observable<any> {
    console.log(data);
    return this.httpClient.post<any>(this.httpUtil.invoiceBaseURL+this.httpUtil.getInvoiceApprovalURLPattern+data.id,null);
    }
}
