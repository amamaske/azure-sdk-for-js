/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureOrbital } from "@azure/arm-orbital";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns list of contacts by spacecraftName.
 *
 * @summary Returns list of contacts by spacecraftName.
 * x-ms-original-file: specification/orbital/resource-manager/Microsoft.Orbital/stable/2022-11-01/examples/ContactsBySpacecraftNameList.json
 */
async function listOfSpacecraft() {
  const subscriptionId =
    process.env["ORBITAL_SUBSCRIPTION_ID"] ||
    "c1be1141-a7c9-4aac-9608-3c2e2f1152c3";
  const resourceGroupName =
    process.env["ORBITAL_RESOURCE_GROUP"] || "contoso-Rgp";
  const spacecraftName = "CONTOSO_SAT";
  const credential = new DefaultAzureCredential();
  const client = new AzureOrbital(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.contacts.list(
    resourceGroupName,
    spacecraftName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listOfSpacecraft();
}

main().catch(console.error);
