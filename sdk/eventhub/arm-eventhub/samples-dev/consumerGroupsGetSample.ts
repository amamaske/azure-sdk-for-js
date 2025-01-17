/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a description for the specified consumer group.
 *
 * @summary Gets a description for the specified consumer group.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/ConsumerGroup/EHConsumerGroupGet.json
 */
async function consumerGroupGet() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-Namespace-2661";
  const eventHubName = "sdk-EventHub-6681";
  const consumerGroupName = "sdk-ConsumerGroup-5563";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.consumerGroups.get(
    resourceGroupName,
    namespaceName,
    eventHubName,
    consumerGroupName,
  );
  console.log(result);
}

async function main() {
  await consumerGroupGet();
}

main().catch(console.error);
