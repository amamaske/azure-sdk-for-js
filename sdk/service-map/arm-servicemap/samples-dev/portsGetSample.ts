/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PortsGetOptionalParams, ServiceMap } from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns the specified port. The port must be live during the specified time interval. If the port is not live during the interval, status 404 (Not Found) is returned.
 *
 * @summary Returns the specified port. The port must be live during the specified time interval. If the port is not live during the interval, status 404 (Not Found) is returned.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Machines/Ports/SMMachinesPortsGetGet.json
 */
async function smMachinesPortsGet() {
  const subscriptionId =
    process.env["SERVICE-MAP_SUBSCRIPTION_ID"] ||
    "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName =
    process.env["SERVICE-MAP_RESOURCE_GROUP"] || "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const machineName = "m-999066c5-38c5-4f2f-9ce0-51d738cdc432";
  const portName = "b-c0a80101_8000";
  const startTime = new Date("2018-01-07T08:01:48.525Z");
  const endTime = new Date("2018-01-07T08:01:48.525Z");
  const options: PortsGetOptionalParams = { startTime, endTime };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const result = await client.ports.get(
    resourceGroupName,
    workspaceName,
    machineName,
    portName,
    options
  );
  console.log(result);
}

async function main() {
  await smMachinesPortsGet();
}

main().catch(console.error);
