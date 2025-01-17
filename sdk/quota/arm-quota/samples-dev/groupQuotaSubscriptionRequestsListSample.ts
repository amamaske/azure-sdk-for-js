/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List API to check the status of a subscriptionId requests by requestId. Request history is maintained for 1 year.
 *
 * @summary List API to check the status of a subscriptionId requests by requestId. Request history is maintained for 1 year.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/SubscriptionRequests/SubscriptionRequests_List.json
 */
async function groupQuotaSubscriptionRequestsList() {
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const resArray = new Array();
  for await (let item of client.groupQuotaSubscriptionRequests.list(
    managementGroupId,
    groupQuotaName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await groupQuotaSubscriptionRequestsList();
}

main().catch(console.error);
