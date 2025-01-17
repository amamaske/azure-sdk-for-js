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
  VaultsListBySubscriptionOptionalParams,
  KeyVaultManagementClient
} from "@azure/arm-keyvault-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The List operation gets information about the vaults associated with the subscription.
 *
 * @summary The List operation gets information about the vaults associated with the subscription.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2019-09-01/examples/listVaultBySubscription.json
 */
async function listVaultsInTheSpecifiedSubscription() {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const top = 1;
  const options: VaultsListBySubscriptionOptionalParams = { top };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.vaults.listBySubscription(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listVaultsInTheSpecifiedSubscription();
}

main().catch(console.error);
