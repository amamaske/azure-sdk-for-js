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
 * This sample demonstrates how to List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 *
 * @summary List DeviceGroup resources by Product. '.default' and '.unassigned' are system defined values and cannot be used for product name.
 * x-ms-original-file: specification/sphere/resource-manager/Microsoft.AzureSphere/stable/2024-04-01/examples/GetDeviceGroups.json
 */
async function deviceGroupsListByProduct() {
  const subscriptionId =
    process.env["SPHERE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SPHERE_RESOURCE_GROUP"] || "MyResourceGroup1";
  const catalogName = "MyCatalog1";
  const productName = "MyProduct1";
  const credential = new DefaultAzureCredential();
  const client = new AzureSphereManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.deviceGroups.listByProduct(
    resourceGroupName,
    catalogName,
    productName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await deviceGroupsListByProduct();
}

main().catch(console.error);
