/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ManagedServiceIdentityClient } from "@azure/arm-msi";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the userAssignedIdentities available under the specified ResourceGroup.
 *
 * @summary Lists all the userAssignedIdentities available under the specified ResourceGroup.
 * x-ms-original-file: specification/msi/resource-manager/Microsoft.ManagedIdentity/stable/2023-01-31/examples/IdentityListByResourceGroup.json
 */
async function identityListByResourceGroup() {
  const subscriptionId = process.env["MSI_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["MSI_RESOURCE_GROUP"] || "rgName";
  const credential = new DefaultAzureCredential();
  const client = new ManagedServiceIdentityClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.userAssignedIdentities.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await identityListByResourceGroup();
}

main().catch(console.error);
