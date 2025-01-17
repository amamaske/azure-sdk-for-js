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
  RunFilterParameters,
  DataFactoryManagementClient,
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Query activity runs based on input filter conditions.
 *
 * @summary Query activity runs based on input filter conditions.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/ActivityRuns_QueryByPipelineRun.json
 */
async function activityRunsQueryByPipelineRun(): Promise<void> {
  const subscriptionId =
    process.env["DATAFACTORY_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName =
    process.env["DATAFACTORY_RESOURCE_GROUP"] || "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const runId = "2f7fdb90-5df1-4b8e-ac2f-064cfa58202b";
  const filterParameters: RunFilterParameters = {
    lastUpdatedAfter: new Date("2018-06-16T00:36:44.3345758Z"),
    lastUpdatedBefore: new Date("2018-06-16T00:49:48.3686473Z"),
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.activityRuns.queryByPipelineRun(
    resourceGroupName,
    factoryName,
    runId,
    filterParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await activityRunsQueryByPipelineRun();
}

main().catch(console.error);
