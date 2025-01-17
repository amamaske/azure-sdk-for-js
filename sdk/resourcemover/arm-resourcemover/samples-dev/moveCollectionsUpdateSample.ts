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
  UpdateMoveCollectionRequest,
  MoveCollectionsUpdateOptionalParams,
  ResourceMoverServiceAPI
} from "@azure/arm-resourcemover";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates a move collection.
 *
 * @summary Updates a move collection.
 * x-ms-original-file: specification/resourcemover/resource-manager/Microsoft.Migrate/stable/2023-08-01/examples/MoveCollections_Update.json
 */
async function moveCollectionsUpdate() {
  const subscriptionId =
    process.env["RESOURCEMOVER_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["RESOURCEMOVER_RESOURCE_GROUP"] || "rg1";
  const moveCollectionName = "movecollection1";
  const body: UpdateMoveCollectionRequest = {
    identity: { type: "SystemAssigned" },
    tags: { key1: "mc1" }
  };
  const options: MoveCollectionsUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new ResourceMoverServiceAPI(credential, subscriptionId);
  const result = await client.moveCollections.update(
    resourceGroupName,
    moveCollectionName,
    options
  );
  console.log(result);
}

async function main() {
  await moveCollectionsUpdate();
}

main().catch(console.error);
