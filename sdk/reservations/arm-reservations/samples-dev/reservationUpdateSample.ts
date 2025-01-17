/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Patch, AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates the applied scopes of the `Reservation`.
 *
 * @summary Updates the applied scopes of the `Reservation`.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/UpdateReservation.json
 */
async function patchReservation() {
  const reservationOrderId = "276e7ae4-84d0-4da6-ab4b-d6b94f3557da";
  const reservationId = "6ef59113-3482-40da-8d79-787f823e34bc";
  const parameters: Patch = {
    appliedScopeType: "Shared",
    instanceFlexibility: "Off"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservation.beginUpdateAndWait(
    reservationOrderId,
    reservationId,
    parameters
  );
  console.log(result);
}

async function main() {
  await patchReservation();
}

main().catch(console.error);
