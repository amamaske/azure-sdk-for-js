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
  ValidateForBackupRequest,
  DataProtectionClient,
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Validate whether adhoc backup will be successful or not
 *
 * @summary Validate whether adhoc backup will be successful or not
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/BackupInstanceOperations/ValidateForBackup.json
 */
async function validateForBackup(): Promise<void> {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "000pikumar";
  const vaultName = "PratikPrivatePreviewVault1";
  const parameters: ValidateForBackupRequest = {
    backupInstance: {
      dataSourceInfo: {
        datasourceType: "OssDB",
        objectType: "Datasource",
        resourceID:
          "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/testdb",
        resourceLocation: "",
        resourceName: "testdb",
        resourceType: "Microsoft.DBforPostgreSQL/servers/databases",
        resourceUri: "",
      },
      dataSourceSetInfo: {
        datasourceType: "OssDB",
        objectType: "DatasourceSet",
        resourceID:
          "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest",
        resourceLocation: "",
        resourceName: "viveksipgtest",
        resourceType: "Microsoft.DBforPostgreSQL/servers",
        resourceUri: "",
      },
      datasourceAuthCredentials: {
        objectType: "SecretStoreBasedAuthCredentials",
        secretStoreResource: {
          secretStoreType: "AzureKeyVault",
          uri: "https://samplevault.vault.azure.net/secrets/credentials",
        },
      },
      friendlyName: "harshitbi2",
      objectType: "BackupInstance",
      policyInfo: {
        policyId:
          "/subscriptions/04cf684a-d41f-4550-9f70-7708a3a2283b/resourceGroups/000pikumar/providers/Microsoft.DataProtection/Backupvaults/PratikPrivatePreviewVault1/backupPolicies/PratikPolicy1",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupInstances.beginValidateForBackupAndWait(
    resourceGroupName,
    vaultName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await validateForBackup();
}

main().catch(console.error);
