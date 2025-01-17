/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { InformaticaDataManagement } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all serverless runtime resources in a given informatica organization resource.
 *
 * @summary Gets all serverless runtime resources in a given informatica organization resource.
 * x-ms-original-file: specification/informatica/resource-manager/Informatica.DataManagement/stable/2024-05-08/examples/Organizations_GetAllServerlessRuntimes_MaximumSet_Gen.json
 */
async function organizationsGetAllServerlessRuntimes() {
  const subscriptionId =
    process.env["INFORMATICA_SUBSCRIPTION_ID"] ||
    "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const resourceGroupName =
    process.env["INFORMATICA_RESOURCE_GROUP"] || "rgopenapi";
  const organizationName = "t";
  const credential = new DefaultAzureCredential();
  const client = new InformaticaDataManagement(credential, subscriptionId);
  const result = await client.organizations.getAllServerlessRuntimes(
    resourceGroupName,
    organizationName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets all serverless runtime resources in a given informatica organization resource.
 *
 * @summary Gets all serverless runtime resources in a given informatica organization resource.
 * x-ms-original-file: specification/informatica/resource-manager/Informatica.DataManagement/stable/2024-05-08/examples/Organizations_GetAllServerlessRuntimes_MinimumSet_Gen.json
 */
async function organizationsGetAllServerlessRuntimesMin() {
  const subscriptionId =
    process.env["INFORMATICA_SUBSCRIPTION_ID"] ||
    "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const resourceGroupName =
    process.env["INFORMATICA_RESOURCE_GROUP"] || "rgopenapi";
  const organizationName = "0";
  const credential = new DefaultAzureCredential();
  const client = new InformaticaDataManagement(credential, subscriptionId);
  const result = await client.organizations.getAllServerlessRuntimes(
    resourceGroupName,
    organizationName,
  );
  console.log(result);
}

async function main() {
  await organizationsGetAllServerlessRuntimes();
  await organizationsGetAllServerlessRuntimesMin();
}

main().catch(console.error);
