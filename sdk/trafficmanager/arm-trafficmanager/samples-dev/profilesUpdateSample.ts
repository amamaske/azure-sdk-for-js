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
  Profile,
  TrafficManagerManagementClient
} from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a Traffic Manager profile.
 *
 * @summary Update a Traffic Manager profile.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2022-04-01/examples/Profile-PATCH-MonitorConfig.json
 */
async function profilePatchMonitorConfig() {
  const subscriptionId =
    process.env["TRAFFICMANAGER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["TRAFFICMANAGER_RESOURCE_GROUP"] ||
    "azuresdkfornetautoresttrafficmanager2583";
  const profileName = "azuresdkfornetautoresttrafficmanager6192";
  const parameters: Profile = {
    monitorConfig: {
      path: "/testpath.aspx",
      customHeaders: [
        { name: "header-1", value: "value-1" },
        { name: "header-2", value: "value-2" }
      ],
      intervalInSeconds: 30,
      port: 80,
      timeoutInSeconds: 6,
      toleratedNumberOfFailures: 4,
      protocol: "HTTP"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.profiles.update(
    resourceGroupName,
    profileName,
    parameters
  );
  console.log(result);
}

async function main() {
  await profilePatchMonitorConfig();
}

main().catch(console.error);
