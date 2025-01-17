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
  AttachedDataNetwork,
  MobileNetworkManagementClient,
} from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an attached data network. Must be created in the same location as its parent packet core data plane.
 *
 * @summary Creates or updates an attached data network. Must be created in the same location as its parent packet core data plane.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2024-04-01/examples/AttachedDataNetworkCreate.json
 */
async function createAttachedDataNetwork() {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const packetCoreControlPlaneName = "TestPacketCoreCP";
  const packetCoreDataPlaneName = "TestPacketCoreDP";
  const attachedDataNetworkName = "TestAttachedDataNetwork";
  const parameters: AttachedDataNetwork = {
    dnsAddresses: ["1.1.1.1"],
    location: "eastus",
    naptConfiguration: {
      enabled: "Enabled",
      pinholeLimits: 65536,
      pinholeTimeouts: { icmp: 30, tcp: 180, udp: 30 },
      portRange: { maxPort: 49999, minPort: 1024 },
      portReuseHoldTime: { tcp: 120, udp: 60 },
    },
    userEquipmentAddressPoolPrefix: ["2.2.0.0/16"],
    userEquipmentStaticAddressPoolPrefix: ["2.4.0.0/16"],
    userPlaneDataInterface: { name: "N6" },
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.attachedDataNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    packetCoreControlPlaneName,
    packetCoreDataPlaneName,
    attachedDataNetworkName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await createAttachedDataNetwork();
}

main().catch(console.error);
