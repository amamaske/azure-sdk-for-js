/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets Quota allocated to a subscription for the specific Resource Provider, Location, ResourceName. This will include the GroupQuota and total quota allocated to the subscription. Only the Group quota allocated to the subscription can be allocated back to the MG Group Quota.
 *
 * @summary Gets Quota allocated to a subscription for the specific Resource Provider, Location, ResourceName. This will include the GroupQuota and total quota allocated to the subscription. Only the Group quota allocated to the subscription can be allocated back to the MG Group Quota.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/SubscriptionQuotaAllocation/SubscriptionQuotaAllocation_Get-Compute.json
 */
async function subscriptionQuotaAllocationGetRequestForCompute() {
  const subscriptionId =
    process.env["QUOTA_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const resourceName = "standardav2family";
  const filter = "provider eq Microsoft.Compute & location eq westus";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential, subscriptionId);
  const result = await client.groupQuotaSubscriptionAllocation.get(
    managementGroupId,
    groupQuotaName,
    resourceName,
    filter,
  );
  console.log(result);
}

async function main() {
  await subscriptionQuotaAllocationGetRequestForCompute();
}

main().catch(console.error);
