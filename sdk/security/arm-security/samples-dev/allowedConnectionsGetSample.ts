/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the list of all possible traffic between resources for the subscription and location, based on connection type.
 *
 * @summary Gets the list of all possible traffic between resources for the subscription and location, based on connection type.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/AllowedConnections/GetAllowedConnections_example.json
 */
async function getAllowedConnections() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "3eeab341-f466-499c-a8be-85427e154bad";
  const resourceGroupName =
    process.env["SECURITY_RESOURCE_GROUP"] || "myResourceGroup";
  const ascLocation = "centralus";
  const connectionType = "Internal";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.allowedConnections.get(
    resourceGroupName,
    ascLocation,
    connectionType,
  );
  console.log(result);
}

async function main() {
  await getAllowedConnections();
}

main().catch(console.error);
