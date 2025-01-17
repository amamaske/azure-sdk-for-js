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
  RegenerateAccessKeyParameters,
  EventHubManagementClient,
} from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Regenerates the ACS and SAS connection strings for the Event Hub.
 *
 * @summary Regenerates the ACS and SAS connection strings for the Event Hub.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/EventHubs/EHEventHubAuthorizationRuleRegenerateKey.json
 */
async function eventHubAuthorizationRuleRegenerateKey() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-namespace-960";
  const eventHubName = "sdk-EventHub-532";
  const authorizationRuleName = "sdk-Authrules-1534";
  const parameters: RegenerateAccessKeyParameters = { keyType: "PrimaryKey" };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.eventHubs.regenerateKeys(
    resourceGroupName,
    namespaceName,
    eventHubName,
    authorizationRuleName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await eventHubAuthorizationRuleRegenerateKey();
}

main().catch(console.error);
