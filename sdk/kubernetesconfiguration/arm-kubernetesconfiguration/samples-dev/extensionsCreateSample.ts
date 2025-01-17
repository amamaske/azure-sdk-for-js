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
  Extension,
  SourceControlConfigurationClient
} from "@azure/arm-kubernetesconfiguration";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a new Kubernetes Cluster Extension.
 *
 * @summary Create a new Kubernetes Cluster Extension.
 * x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/stable/2023-05-01/examples/CreateExtension.json
 */
async function createExtension() {
  const subscriptionId =
    process.env["KUBERNETESCONFIGURATION_SUBSCRIPTION_ID"] || "subId1";
  const resourceGroupName =
    process.env["KUBERNETESCONFIGURATION_RESOURCE_GROUP"] || "rg1";
  const clusterRp = "Microsoft.Kubernetes";
  const clusterResourceName = "connectedClusters";
  const clusterName = "clusterName1";
  const extensionName = "ClusterMonitor";
  const extension: Extension = {
    autoUpgradeMinorVersion: true,
    configurationProtectedSettings: { omsagentSecretKey: "secretKeyValue01" },
    configurationSettings: {
      omsagentEnvClusterName: "clusterName1",
      omsagentSecretWsid: "fakeTokenPlaceholder"
    },
    extensionType: "azuremonitor-containers",
    releaseTrain: "Preview",
    scope: { cluster: { releaseNamespace: "kube-system" } }
  };
  const credential = new DefaultAzureCredential();
  const client = new SourceControlConfigurationClient(
    credential,
    subscriptionId
  );
  const result = await client.extensions.beginCreateAndWait(
    resourceGroupName,
    clusterRp,
    clusterResourceName,
    clusterName,
    extensionName,
    extension
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a new Kubernetes Cluster Extension.
 *
 * @summary Create a new Kubernetes Cluster Extension.
 * x-ms-original-file: specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/stable/2023-05-01/examples/CreateExtensionWithPlan.json
 */
async function createExtensionWithPlan() {
  const subscriptionId =
    process.env["KUBERNETESCONFIGURATION_SUBSCRIPTION_ID"] || "subId1";
  const resourceGroupName =
    process.env["KUBERNETESCONFIGURATION_RESOURCE_GROUP"] || "rg1";
  const clusterRp = "Microsoft.Kubernetes";
  const clusterResourceName = "connectedClusters";
  const clusterName = "clusterName1";
  const extensionName = "azureVote";
  const extension: Extension = {
    autoUpgradeMinorVersion: true,
    extensionType: "azure-vote",
    plan: {
      name: "azure-vote-standard",
      product: "azure-vote-standard-offer-id",
      publisher: "Microsoft"
    },
    releaseTrain: "Preview"
  };
  const credential = new DefaultAzureCredential();
  const client = new SourceControlConfigurationClient(
    credential,
    subscriptionId
  );
  const result = await client.extensions.beginCreateAndWait(
    resourceGroupName,
    clusterRp,
    clusterResourceName,
    clusterName,
    extensionName,
    extension
  );
  console.log(result);
}

async function main() {
  await createExtension();
  await createExtensionWithPlan();
}

main().catch(console.error);
