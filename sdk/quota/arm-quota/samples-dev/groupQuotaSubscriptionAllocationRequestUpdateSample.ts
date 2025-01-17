/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { QuotaAllocationRequestStatus, AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Request to assign quota from group quota to a specific Subscription. The assign GroupQuota to subscriptions or reduce the quota allocated to subscription to give back the unused quota ( quota >= usages) to the groupQuota. So, this API can be used to assign Quota to subscriptions and assign back unused quota to group quota, which can be assigned to another subscriptions in the GroupQuota. User can collect unused quotas from multiple subscriptions within the groupQuota and assign the groupQuota to the subscription, where it's needed.
 *
 * @summary Request to assign quota from group quota to a specific Subscription. The assign GroupQuota to subscriptions or reduce the quota allocated to subscription to give back the unused quota ( quota >= usages) to the groupQuota. So, this API can be used to assign Quota to subscriptions and assign back unused quota to group quota, which can be assigned to another subscriptions in the GroupQuota. User can collect unused quotas from multiple subscriptions within the groupQuota and assign the groupQuota to the subscription, where it's needed.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/SubscriptionQuotaAllocationRequests/PatchSubscriptionQuotaAllocationRequest-Compute.json
 */
async function subscriptionQuotaAllocationPatchRequestForCompute() {
  const subscriptionId =
    process.env["QUOTA_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const resourceProviderName = "Microsoft.Compute";
  const resourceName = "standardav2family";
  const allocateQuotaRequest: QuotaAllocationRequestStatus = {
    properties: {
      requestedResource: { properties: { limit: 10, region: "westus" } },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential, subscriptionId);
  const result = await client.groupQuotaSubscriptionAllocationRequest.beginUpdateAndWait(
    managementGroupId,
    groupQuotaName,
    resourceProviderName,
    resourceName,
    allocateQuotaRequest,
  );
  console.log(result);
}

async function main() {
  await subscriptionQuotaAllocationPatchRequestForCompute();
}

main().catch(console.error);
