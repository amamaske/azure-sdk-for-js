/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FluidRelayManagementClient } from "@azure/arm-fluidrelay";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all Fluid Relay containers which are children of a given Fluid Relay server.
 *
 * @summary List all Fluid Relay containers which are children of a given Fluid Relay server.
 * x-ms-original-file: specification/fluidrelay/resource-manager/Microsoft.FluidRelay/stable/2022-06-01/examples/FluidRelayContainers_ListByFluidRelayServer.json
 */
async function listAllFluidRelayContainersInAFluidRelayServer() {
  const subscriptionId =
    process.env["FLUIDRELAY_SUBSCRIPTION_ID"] || "xxxx-xxxx-xxxx-xxxx";
  const resourceGroup = "myResourceGroup";
  const fluidRelayServerName = "myFluidRelayServer";
  const credential = new DefaultAzureCredential();
  const client = new FluidRelayManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fluidRelayContainers.listByFluidRelayServers(
    resourceGroup,
    fluidRelayServerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listAllFluidRelayContainersInAFluidRelayServer();
}

main().catch(console.error);
