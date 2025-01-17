/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ManagementLockClient } from "@azure/arm-locks-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a management lock by scope.
 *
 * @summary Delete a management lock by scope.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2016-09-01/examples/ManagementLocks_DeleteAtScope.json
 */
async function deleteManagementLockAtScope() {
  const subscriptionId =
    process.env["LOCKS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/subscriptionId";
  const lockName = "testlock";
  const credential = new DefaultAzureCredential();
  const client = new ManagementLockClient(credential, subscriptionId);
  const result = await client.managementLocks.deleteByScope(scope, lockName);
  console.log(result);
}

async function main() {
  await deleteManagementLockAtScope();
}

main().catch(console.error);
