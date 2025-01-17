/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftResourceHealth } from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Service health event details in the subscription by event tracking id. This can be used to fetch sensitive properties for Security Advisory events
 *
 * @summary Service health event details in the subscription by event tracking id. This can be used to fetch sensitive properties for Security Advisory events
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/Event_fetchDetailsBySubscriptionIdAndTrackingId.json
 */
async function eventDetailsBySubscriptionIdAndTrackingId() {
  const subscriptionId =
    process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "subscriptionId";
  const eventTrackingId = "eventTrackingId";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const result = await client.eventOperations.fetchDetailsBySubscriptionIdAndTrackingId(
    eventTrackingId
  );
  console.log(result);
}

async function main() {
  await eventDetailsBySubscriptionIdAndTrackingId();
}

main().catch(console.error);
