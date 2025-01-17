/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { UploadFile, MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to This API allows you to upload content to a file
 *
 * @summary This API allows you to upload content to a file
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2024-04-01/examples/UploadFile.json
 */
async function uploadFile() {
  const fileWorkspaceName = "testworkspaceName";
  const fileName = "test.txt";
  const uploadFile: UploadFile = {
    chunkIndex: 0,
    content:
      "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABd",
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential);
  const result = await client.filesNoSubscription.upload(
    fileWorkspaceName,
    fileName,
    uploadFile,
  );
  console.log(result);
}

async function main() {
  await uploadFile();
}

main().catch(console.error);
