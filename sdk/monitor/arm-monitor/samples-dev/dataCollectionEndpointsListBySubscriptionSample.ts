/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all data collection endpoints in the specified subscription
 *
 * @summary Lists all data collection endpoints in the specified subscription
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/DataCollectionEndpointsListBySubscription.json
 */
async function listDataCollectionEndpointsBySubscription() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataCollectionEndpoints.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listDataCollectionEndpointsBySubscription();
}

main().catch(console.error);
