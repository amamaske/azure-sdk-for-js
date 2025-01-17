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
  VirtualApplianceSite,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the specified Network Virtual Appliance Site.
 *
 * @summary Creates or updates the specified Network Virtual Appliance Site.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/NetworkVirtualApplianceSitePut.json
 */
async function createNetworkVirtualApplianceSite() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva";
  const siteName = "site1";
  const parameters: VirtualApplianceSite = {
    addressPrefix: "192.168.1.0/24",
    o365Policy: {
      breakOutCategories: { default: true, allow: true, optimize: true },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualApplianceSites.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkVirtualApplianceName,
    siteName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createNetworkVirtualApplianceSite();
}

main().catch(console.error);
