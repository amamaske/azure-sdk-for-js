/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DedicatedCapacityUpdateParameters,
  PowerBIDedicated
} from "@azure/arm-powerbidedicated";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates the current state of the specified Dedicated capacity.
 *
 * @summary Updates the current state of the specified Dedicated capacity.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/updateCapacity.json
 */
async function updateCapacityParameters() {
  const subscriptionId =
    process.env["POWERBIDEDICATED_SUBSCRIPTION_ID"] ||
    "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName =
    process.env["POWERBIDEDICATED_RESOURCE_GROUP"] || "TestRG";
  const dedicatedCapacityName = "azsdktest";
  const capacityUpdateParameters: DedicatedCapacityUpdateParameters = {
    administration: {
      members: ["azsdktest@microsoft.com", "azsdktest2@microsoft.com"]
    },
    sku: { name: "A1", tier: "PBIE_Azure" },
    tags: { testKey: "testValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.capacities.beginUpdateAndWait(
    resourceGroupName,
    dedicatedCapacityName,
    capacityUpdateParameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the current state of the specified Dedicated capacity.
 *
 * @summary Updates the current state of the specified Dedicated capacity.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/updateToGen2.json
 */
async function updateCapacityToGeneration2() {
  const subscriptionId =
    process.env["POWERBIDEDICATED_SUBSCRIPTION_ID"] ||
    "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const resourceGroupName =
    process.env["POWERBIDEDICATED_RESOURCE_GROUP"] || "TestRG";
  const dedicatedCapacityName = "azsdktest";
  const capacityUpdateParameters: DedicatedCapacityUpdateParameters = {
    mode: "Gen2",
    sku: { name: "A1", tier: "PBIE_Azure" },
    tags: { testKey: "testValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.capacities.beginUpdateAndWait(
    resourceGroupName,
    dedicatedCapacityName,
    capacityUpdateParameters
  );
  console.log(result);
}

async function main() {
  await updateCapacityParameters();
  await updateCapacityToGeneration2();
}

main().catch(console.error);
