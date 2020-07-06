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
invoiceBaseURL:string="https://scp-innovision.cfapps.us10.hana.ondemand.com";
getInvoiceURLPattern:string="/fetch/report";
getInvoiceApprovalURLPattern:string="/approve/report/";

constructor() {}
}