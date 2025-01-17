/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HealthcareApisManagementClient } from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all FHIR destinations for the given IoT Connector
 *
 * @summary Lists all FHIR destinations for the given IoT Connector
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2024-03-31/examples/iotconnectors/iotconnector_fhirdestination_List.json
 */
async function listIoTConnectors() {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const workspaceName = "workspace1";
  const iotConnectorName = "blue";
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.fhirDestinations.listByIotConnector(
    resourceGroupName,
    workspaceName,
    iotConnectorName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listIoTConnectors();
}

main().catch(console.error);
