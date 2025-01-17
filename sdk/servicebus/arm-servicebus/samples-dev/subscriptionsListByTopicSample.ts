/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceBusManagementClient } from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all the subscriptions under a specified topic.
 *
 * @summary List all the subscriptions under a specified topic.
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/preview/2022-10-01-preview/examples/Subscriptions/SBSubscriptionListByTopic.json
 */
async function subscriptionListByTopic() {
  const subscriptionId =
    process.env["SERVICEBUS_SUBSCRIPTION_ID"] || "5{Subscriptionid}";
  const resourceGroupName =
    process.env["SERVICEBUS_RESOURCE_GROUP"] || "ResourceGroup";
  const namespaceName = "sdk-Namespace-1349";
  const topicName = "sdk-Topics-8740";
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.subscriptions.listByTopic(
    resourceGroupName,
    namespaceName,
    topicName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await subscriptionListByTopic();
}

main().catch(console.error);
