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
  SavedSearch,
  OperationalInsightsManagementClient
} from "@azure/arm-operationalinsights";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a saved search for a given workspace.
 *
 * @summary Creates or updates a saved search for a given workspace.
 * x-ms-original-file: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2020-08-01/examples/WorkspacesSavedSearchesCreateOrUpdate.json
 */
async function savedSearchCreateOrUpdate() {
  const subscriptionId =
    process.env["OPERATIONALINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-00000000000";
  const resourceGroupName =
    process.env["OPERATIONALINSIGHTS_RESOURCE_GROUP"] || "TestRG";
  const workspaceName = "TestWS";
  const savedSearchId = "00000000-0000-0000-0000-00000000000";
  const parameters: SavedSearch = {
    category: "Saved Search Test Category",
    displayName: "Create or Update Saved Search Test",
    functionAlias: "heartbeat_func",
    functionParameters: "a:int=1",
    query: "Heartbeat | summarize Count() by Computer | take a",
    tags: [{ name: "Group", value: "Computer" }],
    version: 2
  };
  const credential = new DefaultAzureCredential();
  const client = new OperationalInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.savedSearches.createOrUpdate(
    resourceGroupName,
    workspaceName,
    savedSearchId,
    parameters
  );
  console.log(result);
}

async function main() {
  await savedSearchCreateOrUpdate();
}

main().catch(console.error);
