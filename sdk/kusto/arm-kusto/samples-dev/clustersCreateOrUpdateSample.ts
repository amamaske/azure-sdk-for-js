/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Cluster } from "@azure/arm-kusto";
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a Kusto cluster.
 *
 * @summary Create or update a Kusto cluster.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2024-04-13/examples/KustoClustersCreateOrUpdate.json
 */
async function kustoClustersCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] || "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const parameters: Cluster = {
    allowedIpRangeList: ["0.0.0.0/0"],
    enableAutoStop: true,
    enableDoubleEncryption: false,
    enablePurge: true,
    enableStreamingIngest: true,
    identity: { type: "SystemAssigned" },
    languageExtensions: {
      value: [
        {
          languageExtensionImageName: "Python3_10_8",
          languageExtensionName: "PYTHON",
        },
        { languageExtensionImageName: "R", languageExtensionName: "R" },
      ],
    },
    location: "westus",
    publicIPType: "DualStack",
    publicNetworkAccess: "Enabled",
    sku: { name: "Standard_L16as_v3", capacity: 2, tier: "Standard" },
  };
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.clusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await kustoClustersCreateOrUpdate();
}

main().catch(console.error);
