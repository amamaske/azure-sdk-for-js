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
  TransparentDataEncryption,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Sql pool's transparent data encryption configuration.
 *
 * @summary Creates or updates a Sql pool's transparent data encryption configuration.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateOrUpdateSqlPoolTransparentDataEncryption.json
 */
async function createOrUpdateASqlPoolTransparentDataEncryptionConfiguration() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-9187";
  const transparentDataEncryptionName = "current";
  const parameters: TransparentDataEncryption = { status: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolTransparentDataEncryptions.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    transparentDataEncryptionName,
    parameters
  );
  console.log(result);
}

async function main() {
  await createOrUpdateASqlPoolTransparentDataEncryptionConfiguration();
}

main().catch(console.error);
