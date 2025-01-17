/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureHSMResourceProvider } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @summary Gets the private endpoint connection for the Cloud Hsm Cluster.
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/CloudHsmClusterPrivateEndpointConnection_Get_MaximumSet_Gen.json
 */
async function cloudHsmClusterPrivateEndpointConnectionGetMaximumSetGen() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "rgcloudhsm";
  const cloudHsmClusterName = "chsm1";
  const peConnectionName = "sample-pec";
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.cloudHsmClusterPrivateEndpointConnections.get(
    resourceGroupName,
    cloudHsmClusterName,
    peConnectionName,
  );
  console.log(result);
}

async function main() {
  await cloudHsmClusterPrivateEndpointConnectionGetMaximumSetGen();
}

main().catch(console.error);
