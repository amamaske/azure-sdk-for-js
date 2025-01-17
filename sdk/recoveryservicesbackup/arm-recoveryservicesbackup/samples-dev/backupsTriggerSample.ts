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
  BackupRequestResource,
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the
operation, call GetProtectedItemOperationResult API.
 *
 * @summary Triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the
operation, call GetProtectedItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/Common/TriggerBackup_Post.json
 */
async function triggerBackup() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "linuxRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "linuxRsVaultRG";
  const fabricName = "Azure";
  const containerName = "IaasVMContainer;iaasvmcontainerv2;testrg;v1win2012r";
  const protectedItemName = "VM;iaasvmcontainerv2;testrg;v1win2012r";
  const parameters: BackupRequestResource = {
    properties: { objectType: "IaasVMBackupRequest" },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backups.trigger(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await triggerBackup();
}

main().catch(console.error);
