/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AvailabilitySetTagsUpdate, ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates the AvailabilitySets resource.
 *
 * @summary Updates the AvailabilitySets resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/AvailabilitySets_Update_MaximumSet_Gen.json
 */
async function availabilitySetsUpdateMaximumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const availabilitySetResourceName = "-";
  const properties: AvailabilitySetTagsUpdate = {
    tags: { key1460: "vcbwibkvr" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.availabilitySets.beginUpdateAndWait(
    resourceGroupName,
    availabilitySetResourceName,
    properties,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates the AvailabilitySets resource.
 *
 * @summary Updates the AvailabilitySets resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/AvailabilitySets_Update_MinimumSet_Gen.json
 */
async function availabilitySetsUpdateMinimumSet() {
  const subscriptionId =
    process.env["SCVMM_SUBSCRIPTION_ID"] ||
    "79332E5A-630B-480F-A266-A941C015AB19";
  const resourceGroupName = process.env["SCVMM_RESOURCE_GROUP"] || "rgscvmm";
  const availabilitySetResourceName = "1";
  const properties: AvailabilitySetTagsUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential, subscriptionId);
  const result = await client.availabilitySets.beginUpdateAndWait(
    resourceGroupName,
    availabilitySetResourceName,
    properties,
  );
  console.log(result);
}

async function main() {
  await availabilitySetsUpdateMaximumSet();
  await availabilitySetsUpdateMinimumSet();
}

main().catch(console.error);
