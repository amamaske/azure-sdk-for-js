/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataProtectionClient } from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns ResourceGuards collection belonging to a ResourceGroup.
 *
 * @summary Returns ResourceGuards collection belonging to a ResourceGroup.
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/ResourceGuardCRUD/GetResourceGuardsInResourceGroup.json
 */
async function getResourceGuardsInResourceGroup(): Promise<void> {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "SampleResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.resourceGuards.listResourcesInResourceGroup(
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await getResourceGuardsInResourceGroup();
}

main().catch(console.error);
