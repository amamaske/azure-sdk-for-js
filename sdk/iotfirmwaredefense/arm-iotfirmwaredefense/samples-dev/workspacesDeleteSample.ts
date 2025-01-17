/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IoTFirmwareDefenseClient } from "@azure/arm-iotfirmwaredefense";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to delete a firmware analysis workspace.
 *
 * @summary The operation to delete a firmware analysis workspace.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Workspaces_Delete_MaximumSet_Gen.json
 */
async function workspacesDeleteMaximumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "5443A01A-5242-4950-AC1A-2DD362180254";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces";
  const workspaceName = "E___-3";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.workspaces.delete(
    resourceGroupName,
    workspaceName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to delete a firmware analysis workspace.
 *
 * @summary The operation to delete a firmware analysis workspace.
 * x-ms-original-file: specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/stable/2024-01-10/examples/Workspaces_Delete_MinimumSet_Gen.json
 */
async function workspacesDeleteMinimumSetGen() {
  const subscriptionId =
    process.env["IOTFIRMWAREDEFENSE_SUBSCRIPTION_ID"] ||
    "5443A01A-5242-4950-AC1A-2DD362180254";
  const resourceGroupName =
    process.env["IOTFIRMWAREDEFENSE_RESOURCE_GROUP"] || "rgworkspaces";
  const workspaceName = "E___-3";
  const credential = new DefaultAzureCredential();
  const client = new IoTFirmwareDefenseClient(credential, subscriptionId);
  const result = await client.workspaces.delete(
    resourceGroupName,
    workspaceName,
  );
  console.log(result);
}

async function main() {
  await workspacesDeleteMaximumSetGen();
  await workspacesDeleteMinimumSetGen();
}

main().catch(console.error);
