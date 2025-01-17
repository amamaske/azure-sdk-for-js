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
  SpringbootappsPatch,
  SpringAppDiscoveryManagementClient,
} from "@azure/arm-springappdiscovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a springbootapps resource.
 *
 * @summary Update a springbootapps resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootapps_Update_MaximumSet_Gen.json
 */
async function springbootappsUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "jnetwlorzmxpxmcucorv";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootapps";
  const siteName = "pdfosfhtemfsaglvwjdyqlyeipucrd";
  const springbootappsName =
    "ofjeesoahqtnovlbuvflyknpbhcpeqqhekntvqxyemuwbcqnuxjgfhsf";
  const springbootapps: SpringbootappsPatch = {};
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootapps.beginUpdateAndWait(
    resourceGroupName,
    siteName,
    springbootappsName,
    springbootapps,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a springbootapps resource.
 *
 * @summary Update a springbootapps resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootapps_Update_MinimumSet_Gen.json
 */
async function springbootappsUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] || "jnetwlorzmxpxmcucorv";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootapps";
  const siteName = "pdfosfhtemfsaglvwjdyqlyeipucrd";
  const springbootappsName =
    "ofjeesoahqtnovlbuvflyknpbhcpeqqhekntvqxyemuwbcqnuxjgfhsf";
  const springbootapps: SpringbootappsPatch = {};
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootapps.beginUpdateAndWait(
    resourceGroupName,
    siteName,
    springbootappsName,
    springbootapps,
  );
  console.log(result);
}

async function main() {
  await springbootappsUpdateMaximumSetGen();
  await springbootappsUpdateMinimumSetGen();
}

main().catch(console.error);
