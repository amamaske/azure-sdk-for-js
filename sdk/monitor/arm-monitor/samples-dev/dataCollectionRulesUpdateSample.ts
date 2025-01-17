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
  ResourceForUpdate,
  DataCollectionRulesUpdateOptionalParams,
  MonitorClient,
} from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates part of a data collection rule.
 *
 * @summary Updates part of a data collection rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/DataCollectionRulesUpdate.json
 */
async function updateDataCollectionRule() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "703362b3-f278-4e4b-9179-c76eaf41ffc2";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "myResourceGroup";
  const dataCollectionRuleName = "myCollectionRule";
  const body: ResourceForUpdate = { tags: { tag1: "A", tag2: "B", tag3: "C" } };
  const options: DataCollectionRulesUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.dataCollectionRules.update(
    resourceGroupName,
    dataCollectionRuleName,
    options,
  );
  console.log(result);
}

async function main() {
  await updateDataCollectionRule();
}

main().catch(console.error);
