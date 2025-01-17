/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataFactoryManagementClient } from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Cancel a single trigger instance by runId.
 *
 * @summary Cancel a single trigger instance by runId.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/TriggerRuns_Cancel.json
 */
async function triggersCancel(): Promise<void> {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const triggerName = "exampleTrigger";
  const runId = "2f7fdb90-5df1-4b8e-ac2f-064cfa58202b";
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.triggerRuns.cancel(
    resourceGroupName,
    factoryName,
    triggerName,
    runId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await triggersCancel();
}

main().catch(console.error);
