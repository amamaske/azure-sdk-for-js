/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PowerBIDedicated } from "@azure/arm-powerbidedicated";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all the Dedicated capacities for the given resource group.
 *
 * @summary Gets all the Dedicated capacities for the given resource group.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/listCapacitiesInResourceGroup.json
 */
async function listCapacitiesInResourceGroup() {
  const subscriptionId =
    process.env["POWERBIDEDICATED_SUBSCRIPTION_ID"] ||
    "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName =
    process.env["POWERBIDEDICATED_RESOURCE_GROUP"] || "TestRG";
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.capacities.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listCapacitiesInResourceGroup();
}

main().catch(console.error);
