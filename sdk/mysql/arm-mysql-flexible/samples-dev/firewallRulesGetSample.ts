/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MySQLManagementFlexibleServerClient } from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets information about a server firewall rule.
 *
 * @summary Gets information about a server firewall rule.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/Firewall/preview/2023-06-01-preview/examples/FirewallRuleGet.json
 */
async function getAFirewallRule() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["MYSQL_RESOURCE_GROUP"] || "TestGroup";
  const serverName = "testserver";
  const firewallRuleName = "rule1";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const result = await client.firewallRules.get(
    resourceGroupName,
    serverName,
    firewallRuleName,
  );
  console.log(result);
}

async function main() {
  await getAFirewallRule();
}

main().catch(console.error);
