/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Job, AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a Job.
 *
 * @summary Creates a Job.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Encoding/stable/2022-07-01/examples/jobs-create.json
 */
async function createAJob() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contosoresources";
  const accountName = "contosomedia";
  const transformName = "exampleTransform";
  const jobName = "job1";
  const parameters: Job = {
    correlationData: { key2: "Value 2", key1: "value1" },
    input: {
      odataType: "#Microsoft.Media.JobInputAsset",
      assetName: "job1-InputAsset"
    },
    outputs: [
      {
        odataType: "#Microsoft.Media.JobOutputAsset",
        assetName: "job1-OutputAsset"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.jobs.create(
    resourceGroupName,
    accountName,
    transformName,
    jobName,
    parameters
  );
  console.log(result);
}

async function main() {
  await createAJob();
}

main().catch(console.error);
