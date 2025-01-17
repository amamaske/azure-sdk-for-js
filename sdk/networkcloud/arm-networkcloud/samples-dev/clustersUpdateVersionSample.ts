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
  ClusterUpdateVersionParameters,
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the version of the provided cluster to one of the available supported versions.
 *
 * @summary Update the version of the provided cluster to one of the available supported versions.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/Clusters_UpdateVersion.json
 */
async function updateClusterVersion() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const clusterUpdateVersionParameters: ClusterUpdateVersionParameters = {
    targetClusterVersion: "2.0",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.clusters.beginUpdateVersionAndWait(
    resourceGroupName,
    clusterName,
    clusterUpdateVersionParameters,
  );
  console.log(result);
}

async function main() {
  await updateClusterVersion();
}

main().catch(console.error);
