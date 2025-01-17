/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get an Activity Log Alert rule.
 *
 * @summary Get an Activity Log Alert rule.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2020-10-01/examples/ActivityLogAlertRule_Get.json
 */
async function getAnActivityLogAlertRule() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "187f412d-1758-44d9-b052-169e2564721d";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "MyResourceGroup";
  const activityLogAlertName = "SampleActivityLogAlertRule";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.activityLogAlerts.get(
    resourceGroupName,
    activityLogAlertName,
  );
  console.log(result);
}

async function main() {
  await getAnActivityLogAlertRule();
}

main().catch(console.error);
