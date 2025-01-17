/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets details for a specific file workspace in an Azure subscription.
 *
 * @summary Gets details for a specific file workspace in an Azure subscription.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2024-04-01/examples/GetFileWorkspaceDetailsForSubscription.json
 */
async function getDetailsOfASubscriptionFileWorkspace() {
  const subscriptionId =
    process.env["SUPPORT_SUBSCRIPTION_ID"] ||
    "132d901f-189d-4381-9214-fe68e27e05a1";
  const fileWorkspaceName = "testworkspace";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential, subscriptionId);
  const result = await client.fileWorkspaces.get(fileWorkspaceName);
  console.log(result);
}

async function main() {
  await getDetailsOfASubscriptionFileWorkspace();
}

main().catch(console.error);
