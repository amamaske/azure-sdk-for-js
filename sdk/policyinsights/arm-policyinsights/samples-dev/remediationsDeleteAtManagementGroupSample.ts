/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicyInsightsClient } from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes an existing remediation at management group scope.
 *
 * @summary Deletes an existing remediation at management group scope.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2024-10-01/examples/Remediations_DeleteManagementGroupScope.json
 */
async function deleteRemediationAtManagementGroupScope() {
  const managementGroupId = "financeMg";
  const remediationName = "storageRemediation";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential);
  const result = await client.remediations.deleteAtManagementGroup(
    managementGroupId,
    remediationName,
  );
  console.log(result);
}

async function main() {
  await deleteRemediationAtManagementGroupScope();
}

main().catch(console.error);
