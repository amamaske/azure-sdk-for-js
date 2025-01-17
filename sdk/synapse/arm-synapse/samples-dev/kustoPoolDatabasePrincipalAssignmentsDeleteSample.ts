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
 * This sample demonstrates how to Deletes a Kusto pool principalAssignment.
 *
 * @summary Deletes a Kusto pool principalAssignment.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolDatabasePrincipalAssignmentsDelete.json
 */
async function kustoPoolDatabasePrincipalAssignmentsDelete() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const databaseName = "Kustodatabase8";
  const principalAssignmentName = "kustoprincipal1";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "kustorptest";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolDatabasePrincipalAssignments.beginDeleteAndWait(
    workspaceName,
    kustoPoolName,
    databaseName,
    principalAssignmentName,
    resourceGroupName
  );
  console.log(result);
}

async function main() {
  await kustoPoolDatabasePrincipalAssignmentsDelete();
}

main().catch(console.error);
