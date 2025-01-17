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
  CheckNameAvailabilityRequest,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Check whether a workspace name is available
 *
 * @summary Check whether a workspace name is available
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CheckNameAvailabilityWorkspaceAlreadyExists.json
 */
async function checkForAWorkspaceNameThatAlreadyExists() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const request: CheckNameAvailabilityRequest = {
    name: "workspace1",
    type: "Microsoft.Synapse/workspaces"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.operations.checkNameAvailability(request);
  console.log(result);
}

/**
 * This sample demonstrates how to Check whether a workspace name is available
 *
 * @summary Check whether a workspace name is available
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CheckNameAvailabilityWorkspaceAvailable.json
 */
async function checkForAWorkspaceNameThatIsAvailable() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const request: CheckNameAvailabilityRequest = {
    name: "workspace1",
    type: "Microsoft.ProjectArcadia/workspaces"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.operations.checkNameAvailability(request);
  console.log(result);
}

async function main() {
  await checkForAWorkspaceNameThatAlreadyExists();
  await checkForAWorkspaceNameThatIsAvailable();
}

main().catch(console.error);
