/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all available server variables.
 *
 * @summary Lists all available server variables.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ApplicationGatewayAvailableServerVariablesGet.json
 */
async function getAvailableServerVariables() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] ||
    "72f988bf-86f1-41af-91ab-2d7cd0dddd4";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.applicationGateways.listAvailableServerVariables();
  console.log(result);
}

async function main() {
  await getAvailableServerVariables();
}

main().catch(console.error);
