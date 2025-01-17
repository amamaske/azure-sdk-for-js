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
  ExternalNetwork,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates ExternalNetwork PUT method.
 *
 * @summary Creates ExternalNetwork PUT method.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/ExternalNetworks_Create_MaximumSet_Gen.json
 */
async function externalNetworksCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const l3IsolationDomainName = "example-l3domain";
  const externalNetworkName = "example-externalnetwork";
  const body: ExternalNetwork = {
    annotation: "annotation",
    exportRoutePolicy: {
      exportIpv4RoutePolicyId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName",
      exportIpv6RoutePolicyId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName"
    },
    exportRoutePolicyId:
      "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName",
    importRoutePolicy: {
      importIpv4RoutePolicyId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName",
      importIpv6RoutePolicyId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName"
    },
    importRoutePolicyId:
      "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName",
    optionAProperties: {
      bfdConfiguration: { intervalInMilliSeconds: 300, multiplier: 15 },
      egressAclId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl",
      ingressAclId:
        "/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl",
      mtu: 1500,
      peerASN: 65047,
      primaryIpv4Prefix: "10.1.1.0/30",
      primaryIpv6Prefix: "3FFE:FFFF:0:CD30::a0/126",
      secondaryIpv4Prefix: "10.1.1.4/30",
      secondaryIpv6Prefix: "3FFE:FFFF:0:CD30::a4/126",
      vlanId: 1001
    },
    optionBProperties: {
      exportRouteTargets: ["65046:10039"],
      importRouteTargets: ["65046:10039"],
      routeTargets: {
        exportIpv4RouteTargets: ["65046:10039"],
        exportIpv6RouteTargets: ["65046:10039"],
        importIpv4RouteTargets: ["65046:10039"],
        importIpv6RouteTargets: ["65046:10039"]
      }
    },
    peeringOption: "OptionA"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.externalNetworks.beginCreateAndWait(
    resourceGroupName,
    l3IsolationDomainName,
    externalNetworkName,
    body
  );
  console.log(result);
}

async function main() {
  await externalNetworksCreateMaximumSetGen();
}

main().catch(console.error);
