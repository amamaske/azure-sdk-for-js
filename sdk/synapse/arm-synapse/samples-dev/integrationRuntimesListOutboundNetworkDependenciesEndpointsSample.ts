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
 * This sample demonstrates how to Gets the list of outbound network dependencies for a given Azure-SSIS integration runtime.
 *
 * @summary Gets the list of outbound network dependencies for a given Azure-SSIS integration runtime.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/IntegrationRuntimes_ListOutboundNetworkDependenciesEndpoints.json
 */
async function getOutboundNetworkDependencyEndpoints() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "ade9c2b6-c160-4305-9bb9-80342f6c1ae2";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "exampleResourceGroup";
  const workspaceName = "exampleWorkspace";
  const integrationRuntimeName = "exampleIntegrationRuntime";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimes.listOutboundNetworkDependenciesEndpoints(
    resourceGroupName,
    workspaceName,
    integrationRuntimeName
  );
  console.log(result);
}

async function main() {
  await getOutboundNetworkDependencyEndpoints();
}

main().catch(console.error);
