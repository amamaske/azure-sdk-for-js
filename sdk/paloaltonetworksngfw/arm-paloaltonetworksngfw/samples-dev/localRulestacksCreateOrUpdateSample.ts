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
  LocalRulestackResource,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a LocalRulestackResource
 *
 * @summary Create a LocalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/LocalRulestacks_CreateOrUpdate_MaximumSet_Gen.json
 */
async function localRulestacksCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName =
    process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const resource: LocalRulestackResource = {
    description: "local rulestacks",
    associatedSubscriptions: ["2bf4a339-294d-4c25-b0b2-ef649e9f5c27"],
    defaultMode: "IPS",
    identity: {
      type: "None",
      userAssignedIdentities: {
        key16: { clientId: "aaaa", principalId: "aaaaaaaaaaaaaaa" }
      }
    },
    location: "eastus",
    minAppIdVersion: "8.5.3",
    panEtag: "2bf4a339-294d-4c25-b0b2-ef649e9f5c12",
    panLocation: "eastus",
    provisioningState: "Accepted",
    scope: "LOCAL",
    securityServices: {
      antiSpywareProfile: "default",
      antiVirusProfile: "default",
      dnsSubscription: "default",
      fileBlockingProfile: "default",
      outboundTrustCertificate: "default",
      outboundUnTrustCertificate: "default",
      urlFilteringProfile: "default",
      vulnerabilityProfile: "default"
    },
    tags: { tagName: "value" }
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.localRulestacks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    localRulestackName,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a LocalRulestackResource
 *
 * @summary Create a LocalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/LocalRulestacks_CreateOrUpdate_MinimumSet_Gen.json
 */
async function localRulestacksCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] ||
    "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const resourceGroupName =
    process.env["PALOALTONETWORKSNGFW_RESOURCE_GROUP"] || "rgopenapi";
  const localRulestackName = "lrs1";
  const resource: LocalRulestackResource = { location: "eastus" };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const result = await client.localRulestacks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    localRulestackName,
    resource
  );
  console.log(result);
}

async function main() {
  await localRulestacksCreateOrUpdateMaximumSetGen();
  await localRulestacksCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
