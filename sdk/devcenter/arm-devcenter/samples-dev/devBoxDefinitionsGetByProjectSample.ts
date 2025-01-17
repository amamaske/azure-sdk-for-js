/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevCenterClient } from "@azure/arm-devcenter";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a Dev Box definition configured for a project
 *
 * @summary Gets a Dev Box definition configured for a project
 * x-ms-original-file: specification/devcenter/resource-manager/Microsoft.DevCenter/stable/2024-02-01/examples/DevBoxDefinitions_GetByProject.json
 */
async function devBoxDefinitionsGetByProject(): Promise<void> {
  const subscriptionId =
    process.env["DEVCENTER_SUBSCRIPTION_ID"] ||
    "0ac520ee-14c0-480f-b6c9-0a90c58ffff";
  const resourceGroupName = process.env["DEVCENTER_RESOURCE_GROUP"] || "rg1";
  const projectName = "ContosoProject";
  const devBoxDefinitionName = "WebDevBox";
  const credential = new DefaultAzureCredential();
  const client = new DevCenterClient(credential, subscriptionId);
  const result = await client.devBoxDefinitions.getByProject(
    resourceGroupName,
    projectName,
    devBoxDefinitionName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await devBoxDefinitionsGetByProject();
}

main().catch(console.error);
