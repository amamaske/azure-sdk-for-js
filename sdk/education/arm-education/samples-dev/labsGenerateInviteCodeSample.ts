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
  InviteCodeGenerateRequest,
  EducationManagementClient
} from "@azure/arm-education";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Generate invite code for a lab
 *
 * @summary Generate invite code for a lab
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GenerateInviteCode.json
 */
async function createLab() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const parameters: InviteCodeGenerateRequest = { maxStudentCount: 10 };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const result = await client.labs.generateInviteCode(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    parameters
  );
  console.log(result);
}

async function main() {
  await createLab();
}

main().catch(console.error);
