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
  ClusterPrincipalAssignmentCheckNameRequest,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks that the principal assignment name is valid and is not already in use.
 *
 * @summary Checks that the principal assignment name is valid and is not already in use.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolPrincipalAssignmentsCheckNameAvailability.json
 */
async function kustoPoolPrincipalAssignmentsCheckNameAvailability() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "kustorptest";
  const principalAssignmentName: ClusterPrincipalAssignmentCheckNameRequest = {
    name: "kustoprincipal1",
    type: "Microsoft.Synapse/workspaces/kustoPools/principalAssignments"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.kustoPoolPrincipalAssignments.checkNameAvailability(
    workspaceName,
    kustoPoolName,
    resourceGroupName,
    principalAssignmentName
  );
  console.log(result);
}

async function main() {
  await kustoPoolPrincipalAssignmentsCheckNameAvailability();
}

main().catch(console.error);
