/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RelayAPI } from "@azure/arm-relay";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the available namespaces within the subscription regardless of the resourceGroups.
 *
 * @summary Lists all the available namespaces within the subscription regardless of the resourceGroups.
 * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/NameSpaces/RelayNameSpaceListBySubscription.json
 */
async function relayNameSpaceListBySubscription() {
  const subscriptionId =
    process.env["RELAY_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const credential = new DefaultAzureCredential();
  const client = new RelayAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.namespaces.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await relayNameSpaceListBySubscription();
}

main().catch(console.error);
