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
 * This sample demonstrates how to Get a security sub-assessment on your scanned resource
 *
 * @summary Get a security sub-assessment on your scanned resource
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/SubAssessments/GetSubAssessment_example.json
 */
async function getSecurityRecommendationTaskFromSecurityDataLocation() {
  const scope =
    "subscriptions/212f9889-769e-45ae-ab43-6da33674bd26/resourceGroups/DEMORG/providers/Microsoft.Compute/virtualMachines/vm2";
  const assessmentName = "1195afff-c881-495e-9bc5-1486211ae03f";
  const subAssessmentName = "95f7da9c-a2a4-1322-0758-fcd24ef09b85";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.subAssessments.get(
    scope,
    assessmentName,
    subAssessmentName,
  );
  console.log(result);
}

async function main() {
  await getSecurityRecommendationTaskFromSecurityDataLocation();
}

main().catch(console.error);
