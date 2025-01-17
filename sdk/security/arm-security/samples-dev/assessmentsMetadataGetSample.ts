/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get metadata information on an assessment type
 *
 * @summary Get metadata information on an assessment type
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-06-01/examples/AssessmentsMetadata/GetAssessmentsMetadata_example.json
 */
async function getSecurityAssessmentMetadata() {
  const assessmentMetadataName = "21300918-b2e3-0346-785f-c77ff57d243b";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.assessmentsMetadata.get(assessmentMetadataName);
  console.log(result);
}

async function main() {
  await getSecurityAssessmentMetadata();
}

main().catch(console.error);
