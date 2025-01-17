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
  CreateRecoveryPlanInput,
  SiteRecoveryManagementClient,
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create a recovery plan.
 *
 * @summary The operation to create a recovery plan.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationRecoveryPlans_Create.json
 */
async function createsARecoveryPlanWithTheGivenDetails() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] ||
    "resourceGroupPS1";
  const recoveryPlanName = "RPtest1";
  const input: CreateRecoveryPlanInput = {
    properties: {
      failoverDeploymentModel: "ResourceManager",
      groups: [
        {
          endGroupActions: [],
          groupType: "Boot",
          replicationProtectedItems: [
            {
              id: "/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/cloud1/replicationProtectionContainers/cloud_6d224fc6-f326-5d35-96de-fbf51efb3179/replicationProtectedItems/f8491e4f-817a-40dd-a90c-af773978c75b",
              virtualMachineId: "f8491e4f-817a-40dd-a90c-af773978c75b",
            },
          ],
          startGroupActions: [],
        },
      ],
      primaryFabricId:
        "/Subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/resourceGroupPS1/providers/Microsoft.RecoveryServices/vaults/vault1/replicationFabrics/cloud1",
      recoveryFabricId: "Microsoft Azure",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationRecoveryPlans.beginCreateAndWait(
    resourceName,
    resourceGroupName,
    recoveryPlanName,
    input,
  );
  console.log(result);
}

async function main() {
  await createsARecoveryPlanWithTheGivenDetails();
}

main().catch(console.error);
