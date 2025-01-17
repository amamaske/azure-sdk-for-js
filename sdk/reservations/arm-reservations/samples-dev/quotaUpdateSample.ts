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
  CurrentQuotaLimitBase,
  AzureReservationAPI
} from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update the quota (service limits) of this resource to the requested value.
  • To get the quota information for specific resource, send a GET request.
  • To increase the quota, update the limit field from the GET response to a new value.
  • To update the quota value, submit the JSON response to the quota request API to update the quota.
  • To update the quota. use the PATCH operation.
 *
 * @summary Update the quota (service limits) of this resource to the requested value.
  • To get the quota information for specific resource, send a GET request.
  • To increase the quota, update the limit field from the GET response to a new value.
  • To update the quota value, submit the JSON response to the quota request API to update the quota.
  • To update the quota. use the PATCH operation.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2020-10-25/examples/patchComputeQuotaRequest.json
 */
async function quotasRequestPatchForCompute() {
  const subscriptionId = "D7EC67B3-7657-4966-BFFC-41EFD36BAAB3";
  const providerId = "Microsoft.Compute";
  const location = "eastus";
  const resourceName = "standardFSv2Family";
  const createQuotaRequest: CurrentQuotaLimitBase = {
    properties: {
      name: { value: "standardFSv2Family" },
      limit: 200,
      unit: "Count"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.quota.beginUpdateAndWait(
    subscriptionId,
    providerId,
    location,
    resourceName,
    createQuotaRequest
  );
  console.log(result);
}

async function main() {
  await quotasRequestPatchForCompute();
}

main().catch(console.error);
