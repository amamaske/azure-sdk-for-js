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
  TrackingEventsDefinition,
  LogicManagementClient
} from "@azure/arm-logic";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Logs the integration account's tracking events.
 *
 * @summary Logs the integration account's tracking events.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/IntegrationAccounts_LogTrackingEvents.json
 */
async function logATrackedEvent() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const integrationAccountName = "testIntegrationAccount";
  const logTrackingEvents: TrackingEventsDefinition = {
    events: [
      {
        error: { code: "NotFound", message: "Some error occurred" },
        eventLevel: "Informational",
        eventTime: new Date("2016-08-05T01:54:49.505567Z"),
        record: {
          agreementProperties: {
            agreementName: "testAgreement",
            as2From: "testas2from",
            as2To: "testas2to",
            receiverPartnerName: "testPartner2",
            senderPartnerName: "testPartner1"
          },
          messageProperties: {
            IsMessageEncrypted: false,
            IsMessageSigned: false,
            correlationMessageId: "Unique message identifier",
            direction: "Receive",
            dispositionType: "received-success",
            fileName: "test",
            isMdnExpected: true,
            isMessageCompressed: false,
            isMessageFailed: false,
            isNrrEnabled: true,
            mdnType: "Async",
            messageId: "12345"
          }
        },
        recordType: "AS2Message"
      }
    ],
    sourceType: "Microsoft.Logic/workflows"
  };
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.integrationAccounts.logTrackingEvents(
    resourceGroupName,
    integrationAccountName,
    logTrackingEvents
  );
  console.log(result);
}

async function main() {
  await logATrackedEvent();
}

main().catch(console.error);
