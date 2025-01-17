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
  AzureMonitorPrivateLinkScope,
  MonitorClient,
} from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 *
 * @summary Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/PrivateLinkScopesCreate.json
 */
async function privateLinkScopeCreate() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "86dc51d3-92ed-4d7e-947a-775ea79b4919";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const azureMonitorPrivateLinkScopePayload: AzureMonitorPrivateLinkScope = {
    accessModeSettings: {
      exclusions: [],
      ingestionAccessMode: "Open",
      queryAccessMode: "Open",
    },
    location: "Global",
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.createOrUpdate(
    resourceGroupName,
    scopeName,
    azureMonitorPrivateLinkScopePayload,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 *
 * @summary Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/preview/2021-07-01-preview/examples/PrivateLinkScopesUpdate.json
 */
async function privateLinkScopeUpdate() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] ||
    "86dc51d3-92ed-4d7e-947a-775ea79b4919";
  const resourceGroupName =
    process.env["MONITOR_RESOURCE_GROUP"] || "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const azureMonitorPrivateLinkScopePayload: AzureMonitorPrivateLinkScope = {
    accessModeSettings: {
      exclusions: [],
      ingestionAccessMode: "Open",
      queryAccessMode: "Open",
    },
    location: "Global",
    tags: { tag1: "Value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.createOrUpdate(
    resourceGroupName,
    scopeName,
    azureMonitorPrivateLinkScopePayload,
  );
  console.log(result);
}

async function main() {
  await privateLinkScopeCreate();
  await privateLinkScopeUpdate();
}

main().catch(console.error);
