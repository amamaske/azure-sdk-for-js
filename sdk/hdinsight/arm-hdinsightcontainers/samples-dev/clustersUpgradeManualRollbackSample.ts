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
  ClusterUpgradeRollback,
  HDInsightContainersManagementClient,
} from "@azure/arm-hdinsightcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Manual rollback upgrade for a cluster.
 *
 * @summary Manual rollback upgrade for a cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/ClusterUpgradeRollback.json
 */
async function clusterUpgradeRollback() {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const resourceGroupName =
    process.env["HDINSIGHT_RESOURCE_GROUP"] || "hiloResourcegroup";
  const clusterPoolName = "clusterpool1";
  const clusterName = "cluster1";
  const clusterRollbackUpgradeRequest: ClusterUpgradeRollback = {
    properties: {
      upgradeHistory:
        "/subscriptions/10e32bab-26da-4cc4-a441-52b318f824e6/resourceGroups/hiloResourcegroup/providers/Microsoft.HDInsight/clusterpools/clusterpool1/clusters/cluster1/upgradeHistories/01_11_2024_02_35_03_AM-HotfixUpgrade",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.clusters.beginUpgradeManualRollbackAndWait(
    resourceGroupName,
    clusterPoolName,
    clusterName,
    clusterRollbackUpgradeRequest,
  );
  console.log(result);
}

async function main() {
  await clusterUpgradeRollback();
}

main().catch(console.error);
