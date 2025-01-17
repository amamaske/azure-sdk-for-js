/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List custom assessment automations by provided subscription and resource group
 *
 * @summary List custom assessment automations by provided subscription and resource group
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-07-01-preview/examples/CustomAssessmentAutomations/customAssessmentAutomationListByResourceGroup_example.json
 */
async function listCustomAssessmentAutomationsInASubscriptionAndAResourceGroup() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "e5d1b86c-3051-44d5-8802-aa65d45a279b";
  const resourceGroupName =
    process.env["SECURITY_RESOURCE_GROUP"] || "TestResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.customAssessmentAutomations.listByResourceGroup(
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listCustomAssessmentAutomationsInASubscriptionAndAResourceGroup();
}

main().catch(console.error);
