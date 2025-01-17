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
  NetworkVirtualApplianceConnection,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a connection to Network Virtual Appliance, if it doesn't exist else updates the existing NVA connection'
 *
 * @summary Creates a connection to Network Virtual Appliance, if it doesn't exist else updates the existing NVA connection'
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/NetworkVirtualApplianceConnectionPut.json
 */
async function networkVirtualApplianceConnectionPut() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkVirtualApplianceName = "nva1";
  const connectionName = "connection1";
  const networkVirtualApplianceConnectionParameters: NetworkVirtualApplianceConnection =
    {
      namePropertiesName: "connection1",
      asn: 64512,
      bgpPeerAddress: ["169.254.16.13", "169.254.16.14"],
      enableInternetSecurity: false,
      routingConfiguration: {
        associatedRouteTable: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",
        },
        inboundRouteMap: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/routeMaps/routeMap1",
        },
        outboundRouteMap: {
          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/routeMaps/routeMap2",
        },
        propagatedRouteTables: {
          ids: [
            {
              id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",
            },
          ],
          labels: ["label1"],
        },
      },
      tunnelIdentifier: 0,
    };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.networkVirtualApplianceConnections.beginCreateOrUpdateAndWait(
      resourceGroupName,
      networkVirtualApplianceName,
      connectionName,
      networkVirtualApplianceConnectionParameters,
    );
  console.log(result);
}

async function main() {
  await networkVirtualApplianceConnectionPut();
}

main().catch(console.error);
