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
  CalculateExchangeRequest,
  AzureReservationAPI
} from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Calculates price for exchanging `Reservations` if there are no policy errors.

 *
 * @summary Calculates price for exchanging `Reservations` if there are no policy errors.

 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/CalculateExchange.json
 */
async function calculateExchange() {
  const body: CalculateExchangeRequest = {
    properties: {
      reservationsToExchange: [
        {
          quantity: 1,
          reservationId:
            "/providers/microsoft.capacity/reservationOrders/1f14354c-dc12-4c8d-8090-6f295a3a34aa/reservations/c8c926bd-fc5d-4e29-9d43-b68340ac23a6"
        }
      ],
      reservationsToPurchase: [
        {
          appliedScopeType: "Shared",
          appliedScopes: [],
          billingPlan: "Upfront",
          billingScopeId: "/subscriptions/ed3a1871-612d-abcd-a849-c2542a68be83",
          displayName: "testDisplayName",
          location: "westus",
          quantity: 1,
          renew: false,
          reservedResourceProperties: { instanceFlexibility: "On" },
          reservedResourceType: "VirtualMachines",
          sku: { name: "Standard_B1ls" },
          term: "P1Y"
        }
      ],
      savingsPlansToPurchase: [
        {
          appliedScopeProperties: {
            resourceGroupId:
              "/subscriptions/10000000-0000-0000-0000-000000000000/resourceGroups/testrg"
          },
          appliedScopeType: "Single",
          billingScopeId: "/subscriptions/10000000-0000-0000-0000-000000000000",
          commitment: { amount: 15.23, currencyCode: "USD", grain: "Hourly" },
          displayName: "ComputeSavingsPlan",
          sku: { name: "Compute_Savings_Plan" },
          term: "P1Y"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.calculateExchange.beginPostAndWait(body);
  console.log(result);
}

async function main() {
  await calculateExchange();
}

main().catch(console.error);
