/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MaintenanceManagementClient } from "@azure/arm-maintenance";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Track maintenance updates to resource
 *
 * @summary Track maintenance updates to resource
 * x-ms-original-file: specification/maintenance/resource-manager/Microsoft.Maintenance/preview/2023-10-01-preview/examples/ApplyUpdates_Get.json
 */
async function applyUpdatesGet() {
  const subscriptionId =
    process.env["MAINTENANCE_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["MAINTENANCE_RESOURCE_GROUP"] || "examplerg";
  const providerName = "Microsoft.Compute";
  const resourceType = "virtualMachineScaleSets";
  const resourceName = "smdtest1";
  const applyUpdateName = "e9b9685d-78e4-44c4-a81c-64a14f9b87b6";
  const credential = new DefaultAzureCredential();
  const client = new MaintenanceManagementClient(credential, subscriptionId);
  const result = await client.applyUpdates.get(
    resourceGroupName,
    providerName,
    resourceType,
    resourceName,
    applyUpdateName,
  );
  console.log(result);
}

async function main() {
  await applyUpdatesGet();
}

main().catch(console.error);
