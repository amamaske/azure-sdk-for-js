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
  CompileQuery,
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Compile the Stream Analytics query.
 *
 * @summary Compile the Stream Analytics query.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Subscription_CompileQuery.json
 */
async function compileTheStreamAnalyticsQuery() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const location = "West US";
  const compileQuery: CompileQuery = {
    compatibilityLevel: "1.2",
    functions: [
      {
        name: "function1",
        type: "Scalar",
        bindingType: "Microsoft.StreamAnalytics/JavascriptUdf",
        inputs: [{ dataType: "any", isConfigurationParameter: undefined }],
        output: { dataType: "bigint" },
      },
    ],
    inputs: [{ name: "input1", type: "Stream" }],
    jobType: "Cloud",
    query: "SELECT\r\n    *\r\nINTO\r\n    [output1]\r\nFROM\r\n    [input1]",
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.subscriptions.compileQuery(
    location,
    compileQuery,
  );
  console.log(result);
}

async function main() {
  await compileTheStreamAnalyticsQuery();
}

main().catch(console.error);
