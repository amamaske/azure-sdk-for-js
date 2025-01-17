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
  AgentPoolPatchParameters,
  AgentPoolsUpdateOptionalParams,
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patch the properties of the provided Kubernetes cluster agent pool, or update the tags associated with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
 *
 * @summary Patch the properties of the provided Kubernetes cluster agent pool, or update the tags associated with the Kubernetes cluster agent pool. Properties and tag updates can be done independently.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/AgentPools_Patch.json
 */
async function patchKubernetesClusterAgentPool() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const kubernetesClusterName = "kubernetesClusterName";
  const agentPoolName = "agentPoolName";
  const agentPoolUpdateParameters: AgentPoolPatchParameters = {
    administratorConfiguration: {
      sshPublicKeys: [
        {
          keyData:
            "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
        },
      ],
    },
    count: 3,
    tags: { key1: "myvalue1", key2: "myvalue2" },
    upgradeSettings: { drainTimeout: 1800, maxSurge: "1", maxUnavailable: "0" },
  };
  const options: AgentPoolsUpdateOptionalParams = { agentPoolUpdateParameters };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.agentPools.beginUpdateAndWait(
    resourceGroupName,
    kubernetesClusterName,
    agentPoolName,
    options,
  );
  console.log(result);
}

async function main() {
  await patchKubernetesClusterAgentPool();
}

main().catch(console.error);
