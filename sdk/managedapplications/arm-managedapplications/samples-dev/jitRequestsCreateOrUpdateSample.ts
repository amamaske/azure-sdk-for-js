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
  JitRequestDefinition,
  ApplicationClient
} from "@azure/arm-managedapplications";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates the JIT request.
 *
 * @summary Creates or updates the JIT request.
 * x-ms-original-file: specification/solutions/resource-manager/Microsoft.Solutions/stable/2021-07-01/examples/createOrUpdateJitRequest.json
 */
async function createOrUpdateJitRequest() {
  const subscriptionId =
    process.env["MANAGEDAPPLICATIONS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["MANAGEDAPPLICATIONS_RESOURCE_GROUP"] || "rg";
  const jitRequestName = "myJitRequest";
  const parameters: JitRequestDefinition = {
    applicationResourceId:
      "/subscriptions/00c76877-e316-48a7-af60-4a09fec9d43f/resourceGroups/52F30DB2/providers/Microsoft.Solutions/applications/7E193158",
    jitAuthorizationPolicies: [
      {
        principalId: "1db8e132e2934dbcb8e1178a61319491",
        roleDefinitionId: "ecd05a23-931a-4c38-a52b-ac7c4c583334"
      }
    ],
    jitSchedulingPolicy: {
      type: "Once",
      duration: "PT8H",
      startTime: new Date("2021-04-22T05:48:30.6661804Z")
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationClient(credential, subscriptionId);
  const result = await client.jitRequests.beginCreateOrUpdateAndWait(
    resourceGroupName,
    jitRequestName,
    parameters
  );
  console.log(result);
}

async function main() {
  await createOrUpdateJitRequest();
}

main().catch(console.error);
