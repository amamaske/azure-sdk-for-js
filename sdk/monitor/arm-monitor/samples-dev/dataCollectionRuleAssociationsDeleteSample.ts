/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes an association.
 *
 * @summary Deletes an association.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2022-06-01/examples/DataCollectionRuleAssociationsDelete.json
 */
async function deleteAssociation() {
  const resourceUri =
    "subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVm";
  const associationName = "myAssociation";
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const result = await client.dataCollectionRuleAssociations.delete(
    resourceUri,
    associationName,
  );
  console.log(result);
}

async function main() {
  await deleteAssociation();
}

main().catch(console.error);
