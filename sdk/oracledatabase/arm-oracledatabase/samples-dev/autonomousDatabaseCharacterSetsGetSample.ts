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
 * This sample demonstrates how to Get a AutonomousDatabaseCharacterSet
 *
 * @summary Get a AutonomousDatabaseCharacterSet
 * x-ms-original-file: specification/oracle/resource-manager/Oracle.Database/stable/2023-09-01/examples/autonomousDatabaseCharacterSet_get.json
 */
async function getAutonomousDbCharacterSet() {
  const subscriptionId =
    process.env["ORACLEDATABASE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const location = "eastus";
  const adbscharsetname = "DATABASE";
  const credential = new DefaultAzureCredential();
  const client = new OracleDatabaseManagementClient(credential, subscriptionId);
  const result = await client.autonomousDatabaseCharacterSets.get(
    location,
    adbscharsetname,
  );
  console.log(result);
}

async function main() {
  await getAutonomousDbCharacterSet();
}

main().catch(console.error);
