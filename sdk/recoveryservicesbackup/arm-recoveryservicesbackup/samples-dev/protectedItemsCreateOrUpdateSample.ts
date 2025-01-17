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
  ProtectedItemResource,
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an
asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.
 *
 * @summary Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an
asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/ConfigureProtection.json
 */
async function enableProtectionOnAzureIaasVM() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const fabricName = "Azure";
  const containerName =
    "IaasVMContainer;iaasvmcontainerv2;netsdktestrg;netvmtestv2vm1";
  const protectedItemName = "VM;iaasvmcontainerv2;netsdktestrg;netvmtestv2vm1";
  const parameters: ProtectedItemResource = {
    properties: {
      policyId:
        "/Subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/SwaggerTestRg/providers/Microsoft.RecoveryServices/vaults/NetSDKTestRsVault/backupPolicies/DefaultPolicy",
      protectedItemType: "Microsoft.Compute/virtualMachines",
      sourceResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/netsdktestrg/providers/Microsoft.Compute/virtualMachines/netvmtestv2vm1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectedItems.createOrUpdate(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an
asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.
 *
 * @summary Enables backup of an item or to modifies the backup policy information of an already backed up item. This is an
asynchronous operation. To know the status of the operation, call the GetItemOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/AzureIaasVm/StopProtection.json
 */
async function stopProtectionWithRetainDataOnAzureIaasVM() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "SwaggerTestRg";
  const fabricName = "Azure";
  const containerName =
    "IaasVMContainer;iaasvmcontainerv2;netsdktestrg;netvmtestv2vm1";
  const protectedItemName = "VM;iaasvmcontainerv2;netsdktestrg;netvmtestv2vm1";
  const parameters: ProtectedItemResource = {
    properties: {
      protectedItemType: "Microsoft.Compute/virtualMachines",
      protectionState: "ProtectionStopped",
      sourceResourceId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/netsdktestrg/providers/Microsoft.Compute/virtualMachines/netvmtestv2vm1",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectedItems.createOrUpdate(
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
  await enableProtectionOnAzureIaasVM();
  await stopProtectionWithRetainDataOnAzureIaasVM();
}

main().catch(console.error);
