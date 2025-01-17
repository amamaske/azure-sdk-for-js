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
  MigrationConfigProperties,
  ServiceBusManagementClient
} from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates Migration configuration and starts migration of entities from Standard to Premium namespace
 *
 * @summary Creates Migration configuration and starts migration of entities from Standard to Premium namespace
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/preview/2022-10-01-preview/examples/Migrationconfigurations/SBMigrationconfigurationCreateAndStartMigration.json
 */
async function migrationConfigurationsStartMigration() {
  const subscriptionId =
    process.env["SERVICEBUS_SUBSCRIPTION_ID"] || "SubscriptionId";
  const resourceGroupName =
    process.env["SERVICEBUS_RESOURCE_GROUP"] || "ResourceGroup";
  const namespaceName = "sdk-Namespace-41";
  const configName = "$default";
  const parameters: MigrationConfigProperties = {
    postMigrationName: "sdk-PostMigration-5919",
    targetNamespace:
      "/subscriptions/SubscriptionId/resourceGroups/ResourceGroup/providers/Microsoft.ServiceBus/namespaces/sdk-Namespace-4028"
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.migrationConfigs.beginCreateAndStartMigrationAndWait(
    resourceGroupName,
    namespaceName,
    configName,
    parameters
  );
  console.log(result);
}

async function main() {
  await migrationConfigurationsStartMigration();
}

main().catch(console.error);
