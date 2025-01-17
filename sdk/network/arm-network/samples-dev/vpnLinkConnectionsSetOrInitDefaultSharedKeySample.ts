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
  ConnectionSharedKeyResult,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Sets or auto generates the shared key based on the user input. If users give a shared key value, it does the set operation. If key length is given, the operation creates a random key of the pre-defined length.
 *
 * @summary Sets or auto generates the shared key based on the user input. If users give a shared key value, it does the set operation. If key length is given, the operation creates a random key of the pre-defined length.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/VpnSiteLinkConnectionDefaultSharedKeyPut.json
 */
async function vpnSiteLinkConnectionDefaultSharedKeyPut() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const gatewayName = "gateway1";
  const connectionName = "vpnConnection1";
  const linkConnectionName = "Connection-Link1";
  const connectionSharedKeyParameters: ConnectionSharedKeyResult = {
    properties: { sharedKey: "ABCDEF123456" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.vpnLinkConnections.beginSetOrInitDefaultSharedKeyAndWait(
      resourceGroupName,
      gatewayName,
      connectionName,
      linkConnectionName,
      connectionSharedKeyParameters,
    );
  console.log(result);
}

async function main() {
  await vpnSiteLinkConnectionDefaultSharedKeyPut();
}

main().catch(console.error);
