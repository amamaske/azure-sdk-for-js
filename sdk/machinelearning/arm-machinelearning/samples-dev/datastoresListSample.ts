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
  DatastoresListOptionalParams,
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List datastores.
 *
 * @summary List datastores.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Datastore/list.json
 */
async function listDatastores() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const count = 1;
  const isDefault = false;
  const names = ["string"];
  const searchText = "string";
  const orderBy = "string";
  const orderByAsc = false;
  const options: DatastoresListOptionalParams = {
    count,
    isDefault,
    names,
    searchText,
    orderBy,
    orderByAsc,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const resArray = new Array();
  for await (let item of client.datastores.list(
    resourceGroupName,
    workspaceName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listDatastores();
}

main().catch(console.error);
