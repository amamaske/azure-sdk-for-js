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
  ScriptCheckNameRequest,
  KustoManagementClient,
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks that the script name is valid and is not already in use.
 *
 * @summary Checks that the script name is valid and is not already in use.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2024-04-13/examples/KustoScriptsCheckNameAvailability.json
 */
async function kustoScriptsCheckNameAvailability(): Promise<void> {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "db";
  const scriptName: ScriptCheckNameRequest = {
    name: "kustoScriptName1",
    type: "Microsoft.Kusto/clusters/databases/scripts",
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.scripts.checkNameAvailability(
    resourceGroupName,
    clusterName,
    databaseName,
    scriptName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await kustoScriptsCheckNameAvailability();
}

main().catch(console.error);
