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
  CheckPrivateLinkServiceVisibilityRequest,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks whether the subscription is visible to private link service.
 *
 * @summary Checks whether the subscription is visible to private link service.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/CheckPrivateLinkServiceVisibility.json
 */
async function checkPrivateLinkServiceVisibility() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const location = "westus";
  const parameters: CheckPrivateLinkServiceVisibilityRequest = {
    privateLinkServiceAlias:
      "mypls.00000000-0000-0000-0000-000000000000.azure.privatelinkservice",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.privateLinkServices.beginCheckPrivateLinkServiceVisibilityAndWait(
      location,
      parameters,
    );
  console.log(result);
}

async function main() {
  await checkPrivateLinkServiceVisibility();
}

main().catch(console.error);
