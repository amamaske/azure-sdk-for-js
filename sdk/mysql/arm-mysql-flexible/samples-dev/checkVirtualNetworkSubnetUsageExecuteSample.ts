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
  VirtualNetworkSubnetUsageParameter,
  MySQLManagementFlexibleServerClient,
} from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get virtual network subnet usage for a given vNet resource id.
 *
 * @summary Get virtual network subnet usage for a given vNet resource id.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/ServiceOperations/stable/2023-12-30/examples/CheckVirtualNetworkSubnetUsage.json
 */
async function checkVirtualNetworkSubnetUsage() {
  const subscriptionId =
    process.env["MYSQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const locationName = "WestUS";
  const parameters: VirtualNetworkSubnetUsageParameter = {
    virtualNetworkResourceId:
      "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/testvnet",
  };
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId,
  );
  const result = await client.checkVirtualNetworkSubnetUsage.execute(
    locationName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await checkVirtualNetworkSubnetUsage();
}

main().catch(console.error);
