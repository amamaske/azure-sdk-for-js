/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FeatureClient } from "@azure/arm-features";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Unregisters the preview feature for the subscription.
 *
 * @summary Unregisters the preview feature for the subscription.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Features/stable/2021-07-01/examples/unregisterFeature.json
 */
async function registerFeature(): Promise<void> {
  const subscriptionId = "ff23096b-f5a2-46ea-bd62-59c3e93fef9a";
  const resourceProviderNamespace = "Resource Provider Namespace";
  const featureName = "feature";
  const credential = new DefaultAzureCredential();
  const client = new FeatureClient(credential, subscriptionId);
  const result = await client.features.unregister(
    resourceProviderNamespace,
    featureName
  );
  console.log(result);
}

registerFeature().catch(console.error);
