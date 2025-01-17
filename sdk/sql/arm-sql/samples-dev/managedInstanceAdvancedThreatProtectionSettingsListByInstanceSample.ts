/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the managed instance's Advanced Threat Protection settings.
 *
 * @summary Get the managed instance's Advanced Threat Protection settings.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-02-01-preview/examples/ManagedInstanceAdvancedThreatProtectionSettingsListByInstance.json
 */
async function listTheManagedInstanceAdvancedThreatProtectionSettings() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "threatprotection-4799";
  const managedInstanceName = "threatprotection-6440";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstanceAdvancedThreatProtectionSettings.listByInstance(
    resourceGroupName,
    managedInstanceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listTheManagedInstanceAdvancedThreatProtectionSettings();
}

main().catch(console.error);
