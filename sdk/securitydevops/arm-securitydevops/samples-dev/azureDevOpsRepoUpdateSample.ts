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
  AzureDevOpsRepo,
  AzureDevOpsRepoUpdateOptionalParams,
  MicrosoftSecurityDevOps
} from "@azure/arm-securitydevops";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update monitored AzureDevOps Project details.
 *
 * @summary Update monitored AzureDevOps Project details.
 * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/AzureDevOpsRepoUpdate.json
 */
async function azureDevOpsRepoUpdate() {
  const subscriptionId =
    process.env["SECURITYDEVOPS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SECURITYDEVOPS_RESOURCE_GROUP"] || "westusrg";
  const azureDevOpsConnectorName = "testconnector";
  const azureDevOpsOrgName = "myOrg";
  const azureDevOpsProjectName = "myProject";
  const azureDevOpsRepoName = "myRepo";
  const azureDevOpsRepo: AzureDevOpsRepo = {};
  const options: AzureDevOpsRepoUpdateOptionalParams = { azureDevOpsRepo };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSecurityDevOps(credential, subscriptionId);
  const result = await client.azureDevOpsRepoOperations.beginUpdateAndWait(
    resourceGroupName,
    azureDevOpsConnectorName,
    azureDevOpsOrgName,
    azureDevOpsProjectName,
    azureDevOpsRepoName,
    options
  );
  console.log(result);
}

async function main() {
  await azureDevOpsRepoUpdate();
}

main().catch(console.error);
