/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { OracleDatabaseManagementClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a DbServer
 *
 * @summary Get a DbServer
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/dbServers_get.json
 */
async function getDbServerByParent() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["ORACLEDATABASE_RESOURCE_GROUP"] || "rg000";
  const cloudexadatainfrastructurename = "infra1";
  const dbserverocid = "ocid1....aaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.dbServers.get(
    resourceGroupName,
    cloudexadatainfrastructurename,
    dbserverocid,
  );
  console.log(result);
}

async function main() {
  await getDbServerByParent();
}

main().catch(console.error);
