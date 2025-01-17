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
  DatadogSingleSignOnResource,
  SingleSignOnConfigurationsCreateOrUpdateOptionalParams,
  MicrosoftDatadogClient
} from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Configures single-sign-on for this resource.
 *
 * @summary Configures single-sign-on for this resource.
 * x-ms-original-file: specification/datadog/resource-manager/Microsoft.Datadog/stable/2023-01-01/examples/SingleSignOnConfigurations_CreateOrUpdate.json
 */
async function singleSignOnConfigurationsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["DATADOG_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DATADOG_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const configurationName = "default";
  const body: DatadogSingleSignOnResource = {
    properties: {
      enterpriseAppId: "00000000-0000-0000-0000-000000000000",
      singleSignOnState: "Enable"
    }
  };
  const options: SingleSignOnConfigurationsCreateOrUpdateOptionalParams = {
    body
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftDatadogClient(credential, subscriptionId);
  const result = await client.singleSignOnConfigurations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    configurationName,
    options
  );
  console.log(result);
}

async function main(): Promise<void> {
  await singleSignOnConfigurationsCreateOrUpdate();
}

main().catch(console.error);
