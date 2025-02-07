/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { HeatMapGetOptionalParams } from "@azure/arm-trafficmanager";
import { TrafficManagerManagementClient } from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets latest heatmap for Traffic Manager profile.
 *
 * @summary Gets latest heatmap for Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/HeatMap-GET.json
 */
async function heatMapGet() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager1323";
  const profileName = "azuresdkfornetautoresttrafficmanager3880";
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.heatMap.get(resourceGroupName, profileName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets latest heatmap for Traffic Manager profile.
 *
 * @summary Gets latest heatmap for Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/HeatMap-GET-With-Null-Values.json
 */
async function heatMapGetWithNullValues() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager1323";
  const profileName = "azuresdkfornetautoresttrafficmanager3880";
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.heatMap.get(resourceGroupName, profileName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets latest heatmap for Traffic Manager profile.
 *
 * @summary Gets latest heatmap for Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/HeatMap-GET-With-TopLeft-BotRight.json
 */
async function heatMapGetWithTopLeftBotRight() {
  const subscriptionId = process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] || "azuresdkfornetautoresttrafficmanager1323";
  const profileName = "azuresdkfornetautoresttrafficmanager3880";
  const topLeft = [10, 50.001];
  const botRight = [-50.001, 80];
  const options: HeatMapGetOptionalParams = { topLeft, botRight };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.heatMap.get(resourceGroupName, profileName, options);
  console.log(result);
}

async function main() {
  await heatMapGet();
  await heatMapGetWithNullValues();
  await heatMapGetWithTopLeftBotRight();
}

main().catch(console.error);
