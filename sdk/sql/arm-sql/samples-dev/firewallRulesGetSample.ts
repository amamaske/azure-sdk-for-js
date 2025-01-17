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
 * This sample demonstrates how to Gets a firewall rule.
 *
 * @summary Gets a firewall rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/FirewallRuleGet.json
 */
async function getFirewallRule() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "firewallrulecrudtest-12";
  const serverName = "firewallrulecrudtest-6285";
  const firewallRuleName = "firewallrulecrudtest-2304";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.get(
    resourceGroupName,
    serverName,
    firewallRuleName,
  );
  console.log(result);
}

async function main() {
  await getFirewallRule();
}

main().catch(console.error);
