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
  L3IsolationDomain,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create isolation domain resources for layer 3 connectivity between compute nodes and for communication with external services .This configuration is applied on the devices only after the creation of networks is completed and isolation domain is enabled.
 *
 * @summary Create isolation domain resources for layer 3 connectivity between compute nodes and for communication with external services .This configuration is applied on the devices only after the creation of networks is completed and isolation domain is enabled.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/L3IsolationDomains_Create_MaximumSet_Gen.json
 */
async function l3IsolationDomainsCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const l3IsolationDomainName = "example-l3domain";
  const body: L3IsolationDomain = {
    aggregateRouteConfiguration: {
      ipv4Routes: [{ prefix: "10.0.0.0/24" }],
      ipv6Routes: [{ prefix: "3FFE:FFFF:0:CD30::a0/29" }]
    },
    annotation: "annotation",
    connectedSubnetRoutePolicy: {
      exportRoutePolicy: {
        exportIpv4RoutePolicyId:
          "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy",
        exportIpv6RoutePolicyId:
          "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy"
      },
      exportRoutePolicyId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName"
    },
    location: "eastus",
    networkFabricId:
      "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric",
    redistributeConnectedSubnets: "True",
    redistributeStaticRoutes: "False",
    tags: { keyID: "KeyValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.l3IsolationDomains.beginCreateAndWait(
    resourceGroupName,
    l3IsolationDomainName,
    body
  );
  console.log(result);
}

async function main() {
  await l3IsolationDomainsCreateMaximumSetGen();
}

main().catch(console.error);
