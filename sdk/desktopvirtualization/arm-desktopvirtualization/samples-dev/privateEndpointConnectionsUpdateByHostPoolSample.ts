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
  PrivateEndpointConnection,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Approve or reject a private endpoint connection.
 *
 * @summary Approve or reject a private endpoint connection.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/PrivateEndpointConnection_UpdateByHostPool.json
 */
async function privateEndpointConnectionUpdateByHostPool(): Promise<void> {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const hostPoolName = "hostPool1";
  const privateEndpointConnectionName =
    "hostPool1.377103f1-5179-4bdf-8556-4cdd3207cc5b";
  const connection: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Approved by admin@consoto.com",
      actionsRequired: "None",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.updateByHostPool(
    resourceGroupName,
    hostPoolName,
    privateEndpointConnectionName,
    connection,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await privateEndpointConnectionUpdateByHostPool();
}

main().catch(console.error);
