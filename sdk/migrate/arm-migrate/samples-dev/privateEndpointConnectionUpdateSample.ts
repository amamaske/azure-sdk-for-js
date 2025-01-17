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
  PrivateEndpointConnectionUpdateOptionalParams,
  AzureMigrateV2
} from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a specific private endpoint connection in the project.
 *
 * @summary Update a specific private endpoint connection in the project.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/PrivateEndpointConnections_Create.json
 */
async function privateEndpointConnectionsCreate() {
  const subscriptionId =
    process.env["MIGRATE_SUBSCRIPTION_ID"] ||
    "6393a73f-8d55-47ef-b6dd-179b3e0c7910";
  const resourceGroupName =
    process.env["MIGRATE_RESOURCE_GROUP"] || "abgoyal-westEurope";
  const projectName = "abgoyalWEselfhostb72bproject";
  const privateEndpointConnectionName =
    "custestpece80project3980pe.7e35576b-3df4-478e-9759-f64351cf4f43";
  const privateEndpointConnectionBody: PrivateEndpointConnection = {
    eTag: '"00009300-0000-0300-0000-602b967b0000"',
    properties: {
      privateLinkServiceConnectionState: {
        description: undefined,
        actionsRequired: "",
        status: "Approved"
      }
    }
  };
  const options: PrivateEndpointConnectionUpdateOptionalParams = {
    privateEndpointConnectionBody
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const result = await client.privateEndpointConnectionOperations.update(
    resourceGroupName,
    projectName,
    privateEndpointConnectionName,
    options
  );
  console.log(result);
}

async function main() {
  await privateEndpointConnectionsCreate();
}

main().catch(console.error);
