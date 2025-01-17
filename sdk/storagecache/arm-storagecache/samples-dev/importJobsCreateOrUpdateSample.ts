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
  ImportJob,
  StorageCacheManagementClient,
} from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an import job. Import jobs are automatically deleted 72 hours after completion.
 *
 * @summary Create or update an import job. Import jobs are automatically deleted 72 hours after completion.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2024-03-01/examples/importJobs_CreateOrUpdate.json
 */
async function importJobsCreateOrUpdate() {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const amlFilesystemName = "fs1";
  const importJobName = "job1";
  const importJob: ImportJob = {
    conflictResolutionMode: "OverwriteAlways",
    importPrefixes: ["/"],
    location: "eastus",
    maximumErrors: 0,
    tags: { dept: "ContosoAds" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.importJobs.beginCreateOrUpdateAndWait(
    resourceGroupName,
    amlFilesystemName,
    importJobName,
    importJob,
  );
  console.log(result);
}

async function main() {
  await importJobsCreateOrUpdate();
}

main().catch(console.error);
