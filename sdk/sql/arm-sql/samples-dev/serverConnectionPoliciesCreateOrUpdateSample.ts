/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServerConnectionPolicy, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a server connection policy
 *
 * @summary Updates a server connection policy
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ServerConnectionPoliciesUpdate.json
 */
async function updatesAServerConnectionPolicy() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "testrg";
  const serverName = "testserver";
  const connectionPolicyName = "default";
  const parameters: ServerConnectionPolicy = { connectionType: "Redirect" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.serverConnectionPolicies.beginCreateOrUpdateAndWait(
      resourceGroupName,
      serverName,
      connectionPolicyName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await updatesAServerConnectionPolicy();
}

main().catch(console.error);
