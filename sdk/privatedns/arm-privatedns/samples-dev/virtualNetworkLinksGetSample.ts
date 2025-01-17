/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PrivateDnsManagementClient } from "@azure/arm-privatedns";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a virtual network link to the specified Private DNS zone.
 *
 * @summary Gets a virtual network link to the specified Private DNS zone.
 * x-ms-original-file: specification/privatedns/resource-manager/Microsoft.Network/stable/2024-06-01/examples/VirtualNetworkLinkGet.json
 */
async function getPrivateDnsZoneVirtualNetworkLink() {
  const subscriptionId =
    process.env["PRIVATEDNS_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["PRIVATEDNS_RESOURCE_GROUP"] || "resourceGroup1";
  const privateZoneName = "privatezone1.com";
  const virtualNetworkLinkName = "virtualNetworkLink1";
  const credential = new DefaultAzureCredential();
  const client = new PrivateDnsManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkLinks.get(
    resourceGroupName,
    privateZoneName,
    virtualNetworkLinkName,
  );
  console.log(result);
}

async function main() {
  await getPrivateDnsZoneVirtualNetworkLink();
}

main().catch(console.error);
