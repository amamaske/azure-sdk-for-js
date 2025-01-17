/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a description for the specified Private Endpoint Connection name.
 *
 * @summary Gets a description for the specified Private Endpoint Connection name.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/NameSpaces/PrivateEndPointConnectionGet.json
 */
async function nameSpacePrivateEndPointConnectionGet() {
  const subscriptionId = process.env["EVENTHUB_SUBSCRIPTION_ID"] || "subID";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "SDK-EventHub-4794";
  const namespaceName = "sdk-Namespace-5828";
  const privateEndpointConnectionName = "privateEndpointConnectionName";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.get(
    resourceGroupName,
    namespaceName,
    privateEndpointConnectionName,
  );
  console.log(result);
}

async function main() {
  await nameSpacePrivateEndPointConnectionGet();
}

main().catch(console.error);
