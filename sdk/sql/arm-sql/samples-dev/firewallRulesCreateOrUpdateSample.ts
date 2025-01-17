/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FirewallRule, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a firewall rule.
 *
 * @summary Creates or updates a firewall rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/FirewallRuleCreate.json
 */
async function createAFirewallRuleMaxOrMin() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "firewallrulecrudtest-12";
  const serverName = "firewallrulecrudtest-6285";
  const firewallRuleName = "firewallrulecrudtest-5370";
  const parameters: FirewallRule = {
    endIpAddress: "0.0.0.3",
    startIpAddress: "0.0.0.3",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.createOrUpdate(
    resourceGroupName,
    serverName,
    firewallRuleName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a firewall rule.
 *
 * @summary Creates or updates a firewall rule.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/FirewallRuleUpdate.json
 */
async function updateAFirewallRuleMaxOrMin() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "firewallrulecrudtest-12";
  const serverName = "firewallrulecrudtest-6285";
  const firewallRuleName = "firewallrulecrudtest-3927";
  const parameters: FirewallRule = {
    endIpAddress: "0.0.0.1",
    startIpAddress: "0.0.0.1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.createOrUpdate(
    resourceGroupName,
    serverName,
    firewallRuleName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createAFirewallRuleMaxOrMin();
  await updateAFirewallRuleMaxOrMin();
}

main().catch(console.error);
