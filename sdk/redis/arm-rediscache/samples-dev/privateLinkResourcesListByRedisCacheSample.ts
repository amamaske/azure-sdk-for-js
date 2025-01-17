/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RedisManagementClient } from "@azure/arm-rediscache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the private link resources that need to be created for a redis cache.
 *
 * @summary Gets the private link resources that need to be created for a redis cache.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2024-03-01/examples/RedisCacheListPrivateLinkResources.json
 */
async function storageAccountListPrivateLinkResources() {
  const subscriptionId =
    process.env["REDIS_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["REDIS_RESOURCE_GROUP"] || "rgtest01";
  const cacheName = "cacheTest01";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listByRedisCache(
    resourceGroupName,
    cacheName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await storageAccountListPrivateLinkResources();
}

main().catch(console.error);
