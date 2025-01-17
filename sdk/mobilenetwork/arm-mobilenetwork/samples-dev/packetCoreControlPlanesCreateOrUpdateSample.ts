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
  PacketCoreControlPlane,
  MobileNetworkManagementClient,
} from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a packet core control plane.
 *
 * @summary Creates or updates a packet core control plane.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2024-04-01/examples/PacketCoreControlPlaneCreate.json
 */
async function createPacketCoreControlPlane() {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const packetCoreControlPlaneName = "TestPacketCoreCP";
  const parameters: PacketCoreControlPlane = {
    controlPlaneAccessInterface: { name: "N2" },
    coreNetworkTechnology: "5GC",
    eventHub: {
      id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.EventHub/namespaces/contosoNamespace/eventHubs/contosoHub",
      reportingInterval: 60,
    },
    installation: { desiredState: "Installed" },
    localDiagnosticsAccess: {
      authenticationType: "AAD",
      httpsServerCertificate: {
        certificateUrl:
          "https://contosovault.vault.azure.net/certificates/ingress",
      },
    },
    location: "eastus",
    platform: {
      type: "AKS-HCI",
      azureStackEdgeDevice: {
        id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/TestAzureStackEdgeDevice",
      },
      connectedCluster: {
        id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Kubernetes/connectedClusters/TestConnectedCluster",
      },
      customLocation: {
        id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ExtendedLocation/customLocations/TestCustomLocation",
      },
    },
    signaling: {
      nasEncryption: ["NEA2/EEA2", "NEA1/EEA1", "NEA0/EEA0"],
      nasReroute: { macroMmeGroupId: 1024 },
    },
    sites: [
      {
        id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/sites/testSite",
      },
    ],
    sku: "G0",
    ueMtu: 1600,
    version: "0.2.0",
  };
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result =
    await client.packetCoreControlPlanes.beginCreateOrUpdateAndWait(
      resourceGroupName,
      packetCoreControlPlaneName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await createPacketCoreControlPlane();
}

main().catch(console.error);
