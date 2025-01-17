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
  VirtualMachineInstancesDeleteOptionalParams,
  ScVmm,
} from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to delete a virtual machine instance.
 *
 * @summary The operation to delete a virtual machine instance.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineInstances_Delete_MaximumSet_Gen.json
 */
async function virtualMachineInstancesDeleteMaximumSet() {
  const resourceUri = "gtgclehcbsyave";
  const force = "true";
  const deleteFromHost = "true";
  const options: VirtualMachineInstancesDeleteOptionalParams = {
    force,
    deleteFromHost,
  };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result = await client.virtualMachineInstances.beginDeleteAndWait(
    resourceUri,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to delete a virtual machine instance.
 *
 * @summary The operation to delete a virtual machine instance.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/VirtualMachineInstances_Delete_MinimumSet_Gen.json
 */
async function virtualMachineInstancesDeleteMinimumSet() {
  const resourceUri = "gtgclehcbsyave";
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result =
    await client.virtualMachineInstances.beginDeleteAndWait(resourceUri);
  console.log(result);
}

async function main() {
  await virtualMachineInstancesDeleteMaximumSet();
  await virtualMachineInstancesDeleteMinimumSet();
}

main().catch(console.error);
