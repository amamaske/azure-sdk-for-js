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
  GitHubOwner,
  MicrosoftSecurityDevOps
} from "@azure/arm-securitydevops";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a monitored GitHub owner.
 *
 * @summary Create or update a monitored GitHub owner.
 * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/GitHubOwnerCreateOrUpdate.json
 */
async function gitHubOwnerCreateOrUpdate() {
  const subscriptionId =
    process.env["SECURITYDEVOPS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SECURITYDEVOPS_RESOURCE_GROUP"] || "westusrg";
  const gitHubConnectorName = "testconnector";
  const gitHubOwnerName = "Azure";
  const gitHubOwner: GitHubOwner = {};
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSecurityDevOps(credential, subscriptionId);
  const result = await client.gitHubOwnerOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    gitHubConnectorName,
    gitHubOwnerName,
    gitHubOwner
  );
  console.log(result);
}

async function main() {
  await gitHubOwnerCreateOrUpdate();
}

main().catch(console.error);
