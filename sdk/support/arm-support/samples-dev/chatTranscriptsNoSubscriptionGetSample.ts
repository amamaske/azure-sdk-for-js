/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns chatTranscript details for a no subscription support ticket.
 *
 * @summary Returns chatTranscript details for a no subscription support ticket.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2024-04-01/examples/GetchatTranscriptDetailsForSupportTicket.json
 */
async function getChatTranscriptDetailsForASubscriptionSupportTicket() {
  const supportTicketName = "testticket";
  const chatTranscriptName = "b371192a-b094-4a71-b093-7246029b0a54";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential);
  const result = await client.chatTranscriptsNoSubscription.get(
    supportTicketName,
    chatTranscriptName,
  );
  console.log(result);
}

async function main() {
  await getChatTranscriptDetailsForASubscriptionSupportTicket();
}

main().catch(console.error);
