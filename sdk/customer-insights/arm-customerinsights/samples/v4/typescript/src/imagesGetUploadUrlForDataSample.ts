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
  GetImageUploadUrlInput,
  CustomerInsightsManagementClient
} from "@azure/arm-customerinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets data image upload URL.
 *
 * @summary Gets data image upload URL.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/ImagesGetUploadUrlForData.json
 */
async function imagesGetUploadUrlForData(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const parameters: GetImageUploadUrlInput = {
    entityType: "Profile",
    entityTypeName: "Contact",
    relativePath: "images/profile1.png"
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.images.getUploadUrlForData(
    resourceGroupName,
    hubName,
    parameters
  );
  console.log(result);
}

imagesGetUploadUrlForData().catch(console.error);
