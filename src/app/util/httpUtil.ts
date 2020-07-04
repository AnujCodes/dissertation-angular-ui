import { HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpUtil {
headers=new HttpHeaders({"Content-Type":"application/json",
                        "tenantId":"tenant1",
                        "databaseId":"database1",
                        "databaseSchema":"customer_schema",
                        "userId":"i328444"});
invoiceBaseURL:string="http://localhost:8082";
getInvoiceURLPattern:string="/Invoice/GetAllActive";

constructor() {}
}