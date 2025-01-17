/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DnsResolverManagementClient } from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be undone.
 *
 * @summary Deletes a virtual network link to a DNS forwarding ruleset. WARNING: This operation cannot be undone.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/VirtualNetworkLink_Delete.json
 */
async function deleteVirtualNetworkLinkToADnsForwardingRuleset() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsForwardingRulesetName = "sampleDnsForwardingRuleset";
  const virtualNetworkLinkName = "sampleVirtualNetworkLink";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkLinks.beginDeleteAndWait(
    resourceGroupName,
    dnsForwardingRulesetName,
    virtualNetworkLinkName,
  );
  console.log(result);
}

async function main() {
  await deleteVirtualNetworkLinkToADnsForwardingRuleset();
}

main().catch(console.error);
