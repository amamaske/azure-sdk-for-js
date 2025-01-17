/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed
or failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations
create jobs. This method returns the list of jobs when the operation is complete.
 *
 * @summary Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed
or failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations
create jobs. This method returns the list of jobs when the operation is complete.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/Common/ProtectedItem_Delete_OperationStatus.json
 */
async function getProtectedItemDeleteOperationStatus() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "PySDKBackupTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] ||
    "PythonSDKBackupTestRg";
  const operationId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupOperationStatuses.get(
    vaultName,
    resourceGroupName,
    operationId,
  );
  console.log(result);
}

async function main() {
  await getProtectedItemDeleteOperationStatus();
}

main().catch(console.error);
