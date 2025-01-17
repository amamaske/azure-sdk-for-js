/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { QuotaBucketRequest, LoadTestClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Check Quota Availability on quota bucket per region per subscription.
 *
 * @summary Check Quota Availability on quota bucket per region per subscription.
 * x-ms-original-file: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/stable/2022-12-01/examples/Quotas_CheckAvailability.json
 */
async function quotasCheckAvailability() {
  const subscriptionId =
    process.env["LOADTESTSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const location = "westus";
  const quotaBucketName = "testQuotaBucket";
  const quotaBucketRequest: QuotaBucketRequest = {
    currentQuota: 40,
    currentUsage: 20,
    dimensions: { location: "westus", subscriptionId: "testsubscriptionId" },
    newQuota: 50
  };
  const credential = new DefaultAzureCredential();
  const client = new LoadTestClient(credential, subscriptionId);
  const result = await client.quotas.checkAvailability(
    location,
    quotaBucketName,
    quotaBucketRequest
  );
  console.log(result);
}

async function main() {
  await quotasCheckAvailability();
}

main().catch(console.error);
