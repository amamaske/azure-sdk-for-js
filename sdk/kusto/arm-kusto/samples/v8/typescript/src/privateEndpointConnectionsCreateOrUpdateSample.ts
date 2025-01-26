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
  KustoManagementClient,
} from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Approve or reject a private endpoint connection with a given name.
 *
 * @summary Approve or reject a private endpoint connection with a given name.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2024-04-13/examples/KustoPrivateEndpointConnectionsCreateOrUpdate.json
 */
async function approveOrRejectAPrivateEndpointConnectionWithAGivenName(): Promise<void> {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoclusterrptest4";
  const privateEndpointConnectionName = "privateEndpointTest";
  const parameters: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "Approved by johndoe@contoso.com",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result =
    await client.privateEndpointConnections.beginCreateOrUpdateAndWait(
      resourceGroupName,
      clusterName,
      privateEndpointConnectionName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await approveOrRejectAPrivateEndpointConnectionWithAGivenName();
}

main().catch(console.error);
