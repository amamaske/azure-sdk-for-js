/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureSphereManagementClient } from "@azure/arm-sphere";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List Catalog resources by subscription ID
 *
 * @summary List Catalog resources by subscription ID
 * x-ms-original-file: specification/sphere/resource-manager/Microsoft.AzureSphere/stable/2024-04-01/examples/GetCatalogsSub.json
 */
async function catalogsListBySubscription() {
  const subscriptionId =
    process.env["SPHERE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new AzureSphereManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.catalogs.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await catalogsListBySubscription();
}

main().catch(console.error);
