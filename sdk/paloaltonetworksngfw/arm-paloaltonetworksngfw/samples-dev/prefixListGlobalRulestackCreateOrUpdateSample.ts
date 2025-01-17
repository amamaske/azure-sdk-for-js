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
  PrefixListGlobalRulestackResource,
  PaloAltoNetworksCloudngfw
} from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a PrefixListGlobalRulestackResource
 *
 * @summary Create a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PrefixListGlobalRulestack_CreateOrUpdate_MaximumSet_Gen.json
 */
async function prefixListGlobalRulestackCreateOrUpdateMaximumSetGen() {
  const globalRulestackName = "praval";
  const name = "armid1";
  const resource: PrefixListGlobalRulestackResource = {
    description: "string",
    auditComment: "comment",
    etag: "2bf4a339-294d-4c25-b0b2-ef649e9f5c27",
    prefixList: ["1.0.0.0/24"],
    provisioningState: "Accepted"
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.prefixListGlobalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    name,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a PrefixListGlobalRulestackResource
 *
 * @summary Create a PrefixListGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/PrefixListGlobalRulestack_CreateOrUpdate_MinimumSet_Gen.json
 */
async function prefixListGlobalRulestackCreateOrUpdateMinimumSetGen() {
  const globalRulestackName = "praval";
  const name = "armid1";
  const resource: PrefixListGlobalRulestackResource = {
    prefixList: ["1.0.0.0/24"]
  };
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.prefixListGlobalRulestack.beginCreateOrUpdateAndWait(
    globalRulestackName,
    name,
    resource
  );
  console.log(result);
}

async function main() {
  await prefixListGlobalRulestackCreateOrUpdateMaximumSetGen();
  await prefixListGlobalRulestackCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
