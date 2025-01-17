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
  ReservationGetOptionalParams,
  AzureReservationAPI
} from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get specific `Reservation` details.
 *
 * @summary Get specific `Reservation` details.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/GetReservationDetails.json
 */
async function getReservation() {
  const reservationOrderId = "276e7ae4-84d0-4da6-ab4b-d6b94f3557da";
  const reservationId = "6ef59113-3482-40da-8d79-787f823e34bc";
  const expand = "renewProperties";
  const options: ReservationGetOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservation.get(
    reservationOrderId,
    reservationId,
    options
  );
  console.log(result);
}

async function main() {
  await getReservation();
}

main().catch(console.error);
