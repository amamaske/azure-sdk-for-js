/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a restore point.
 *
 * @summary Gets a restore point.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/SqlPoolRestorePointsGet.json
 */
async function getsASqlPoolRestorePoint() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const workspaceName = "testws";
  const sqlPoolName = "testpool";
  const restorePointName = "131546477590000000";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolRestorePoints.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    restorePointName
  );
  console.log(result);
}

async function main() {
  await getsASqlPoolRestorePoint();
}

main().catch(console.error);
