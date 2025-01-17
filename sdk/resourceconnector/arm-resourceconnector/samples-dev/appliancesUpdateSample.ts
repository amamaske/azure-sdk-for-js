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
  AppliancesUpdateOptionalParams,
  ResourceConnectorManagementClient
} from "@azure/arm-resourceconnector";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an Appliance with the specified Resource Name in the specified Resource Group and Subscription.
 *
 * @summary Updates an Appliance with the specified Resource Name in the specified Resource Group and Subscription.
 * x-ms-original-file: specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/stable/2022-10-27/examples/AppliancesPatch.json
 */
async function updateAppliance() {
  const subscriptionId =
    process.env["RESOURCECONNECTOR_SUBSCRIPTION_ID"] ||
    "11111111-2222-3333-4444-555555555555";
  const resourceGroupName =
    process.env["RESOURCECONNECTOR_RESOURCE_GROUP"] || "testresourcegroup";
  const resourceName = "appliance01";
  const tags = { key: "value" };
  const options: AppliancesUpdateOptionalParams = { tags };
  const credential = new DefaultAzureCredential();
  const client = new ResourceConnectorManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.appliances.update(
    resourceGroupName,
    resourceName,
    options
  );
  console.log(result);
}

async function main() {
  await updateAppliance();
}

main().catch(console.error);
