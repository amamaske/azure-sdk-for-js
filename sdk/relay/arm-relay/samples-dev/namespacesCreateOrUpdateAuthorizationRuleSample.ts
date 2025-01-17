/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AuthorizationRule, RelayAPI } from "@azure/arm-relay";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an authorization rule for a namespace.
 *
 * @summary Creates or updates an authorization rule for a namespace.
 * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/NameSpaces/RelayNameSpaceAuthorizationRuleCreate.json
 */
async function relayNameSpaceAuthorizationRuleCreate() {
  const subscriptionId =
    process.env["RELAY_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["RELAY_RESOURCE_GROUP"] || "resourcegroup";
  const namespaceName = "example-RelayNamespace-01";
  const authorizationRuleName = "example-RelayAuthRules-01";
  const parameters: AuthorizationRule = { rights: ["Listen", "Send"] };
  const credential = new DefaultAzureCredential();
  const client = new RelayAPI(credential, subscriptionId);
  const result = await client.namespaces.createOrUpdateAuthorizationRule(
    resourceGroupName,
    namespaceName,
    authorizationRuleName,
    parameters
  );
  console.log(result);
}

async function main() {
  await relayNameSpaceAuthorizationRuleCreate();
}

main().catch(console.error);
