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
  UpdateAdministrativeState,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Implements the operation to the underlying resources.
 *
 * @summary Implements the operation to the underlying resources.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/NetworkTaps_UpdateAdministrativeState_MaximumSet_Gen.json
 */
async function networkTapsUpdateAdministrativeStateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const networkTapName = "example-networkTap";
  const body: UpdateAdministrativeState = {
    resourceIds: [""],
    state: "Enable"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.networkTaps.beginUpdateAdministrativeStateAndWait(
    resourceGroupName,
    networkTapName,
    body
  );
  console.log(result);
}

async function main() {
  await networkTapsUpdateAdministrativeStateMaximumSetGen();
}

main().catch(console.error);
