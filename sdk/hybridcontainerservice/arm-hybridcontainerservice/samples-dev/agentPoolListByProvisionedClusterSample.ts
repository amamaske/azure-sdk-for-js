/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridContainerServiceClient } from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the list of agent pools in the specified provisioned cluster
 *
 * @summary Gets the list of agent pools in the specified provisioned cluster
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/stable/2024-01-01/examples/ListAgentPoolByProvisionedClusterInstance.json
 */
async function listAgentPoolByProvisionedClusterInstance() {
  const connectedClusterResourceUri =
    "subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/test-hybridakscluster";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential);
  const resArray = new Array();
  for await (let item of client.agentPoolOperations.listByProvisionedCluster(
    connectedClusterResourceUri
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listAgentPoolByProvisionedClusterInstance();
}

main().catch(console.error);
