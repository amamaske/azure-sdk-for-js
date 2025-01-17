/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SiteRecoveryManagementClient } from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the storage classification mappings for the fabric.
 *
 * @summary Lists the storage classification mappings for the fabric.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationStorageClassificationMappings_ListByReplicationStorageClassifications.json
 */
async function getsTheListOfStorageClassificationMappingsObjectsUnderAStorage() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "9112a37f-0f3e-46ec-9c00-060c6edca071";
  const resourceName = "vault1";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] ||
    "resourceGroupPS1";
  const fabricName =
    "2a48e3770ac08aa2be8bfbd94fcfb1cbf2dcc487b78fb9d3bd778304441b06a0";
  const storageClassificationName = "8891569e-aaef-4a46-a4a0-78c14f2d7b09";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.replicationStorageClassificationMappings.listByReplicationStorageClassifications(
    resourceName,
    resourceGroupName,
    fabricName,
    storageClassificationName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getsTheListOfStorageClassificationMappingsObjectsUnderAStorage();
}

main().catch(console.error);
