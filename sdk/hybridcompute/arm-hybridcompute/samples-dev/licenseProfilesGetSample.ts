/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves information about the view of a license profile.
 *
 * @summary Retrieves information about the view of a license profile.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-07-31-preview/examples/licenseProfile/LicenseProfile_Get.json
 */
async function getLicenseProfile() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscriptionId}";
  const resourceGroupName =
    process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const machineName = "myMachine";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.licenseProfiles.get(
    resourceGroupName,
    machineName,
  );
  console.log(result);
}

async function main() {
  await getLicenseProfile();
}

main().catch(console.error);
