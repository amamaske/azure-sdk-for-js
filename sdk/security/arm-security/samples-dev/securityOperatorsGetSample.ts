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
 * This sample demonstrates how to Get a specific security operator for the requested scope.
 *
 * @summary Get a specific security operator for the requested scope.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2023-01-01-preview/examples/SecurityOperators/GetSecurityOperatorByName_example.json
 */
async function getASpecificSecurityOperatorByScopeAndSecurityOperatorName() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const pricingName = "CloudPosture";
  const securityOperatorName = "DefenderCSPMSecurityOperator";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityOperators.get(
    pricingName,
    securityOperatorName,
  );
  console.log(result);
}

async function main() {
  await getASpecificSecurityOperatorByScopeAndSecurityOperatorName();
}

main().catch(console.error);
