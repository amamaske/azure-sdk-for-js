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
  SyncIdentityProviderUpdate,
  AzureRedHatOpenShiftClient,
} from "@azure/arm-redhatopenshift";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation returns properties of a SyncIdentityProvider.
 *
 * @summary The operation returns properties of a SyncIdentityProvider.
 * x-ms-original-file: specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/openshiftclusters/stable/2023-11-22/examples/SyncIdentityProviders_Update.json
 */
async function updatesASyncIdentityProviderWithTheSpecifiedSubscriptionResourceGroupAndResourceName() {
  const subscriptionId =
    process.env["REDHATOPENSHIFT_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["REDHATOPENSHIFT_RESOURCE_GROUP"] || "resourceGroup";
  const resourceName = "resourceName";
  const childResourceName = "childResourceName";
  const parameters: SyncIdentityProviderUpdate = {
    resources:
      "ewogICAgImFwaVZlcnNpb24iOiAiaGl2ZS5vcGVuc2hpZnQuaW8vdjEiLAogICAgImtpbmQiOiAiU3luY0lkZW50aXR5UHJvdmlkZXIiLAogICAgIm1ldGFkYXRhIjogewogICAgICAgICJuYW1lIjogInRlc3QtY2x1c3RlciIsCiAgICAgICAgIm5hbWVzcGFjZSI6ICJhcm8tZjYwYWU4YTItYmNhMS00OTg3LTkwNTYtWFhYWFhYWFhYWFhYIgogICAgfSwKICAgICJzcGVjIjogewogICAgICAgICJjbHVzdGVyRGVwbG95bWVudFJlZnMiOiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICJuYW1lIjogInRlc3QtY2x1c3RlciIKICAgICAgICAgICAgfQogICAgICAgIF0sCiAgICAgICAgImlkZW50aXR5UHJvdmlkZXJzIjogWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAiaHRwYXNzd2QiOiB7CiAgICAgICAgICAgICAgICAgICAgImZpbGVEYXRhIjogewogICAgICAgICAgICAgICAgICAgICAgICAibmFtZSI6ICJodHBhc3N3ZC1zZWNyZXQiCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICJtYXBwaW5nTWV0aG9kIjogImNsYWltIiwKICAgICAgICAgICAgICAgICJuYW1lIjogIkhUUGFzc3dkIiwKICAgICAgICAgICAgICAgICJ0eXBlIjogIkhUUGFzc3dkIgogICAgICAgICAgICB9CiAgICAgICAgXQogICAgfSwKICAgICJzdGF0dXMiOiB7fQp9Cg==",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureRedHatOpenShiftClient(credential, subscriptionId);
  const result = await client.syncIdentityProviders.update(
    resourceGroupName,
    resourceName,
    childResourceName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await updatesASyncIdentityProviderWithTheSpecifiedSubscriptionResourceGroupAndResourceName();
}

main().catch(console.error);
