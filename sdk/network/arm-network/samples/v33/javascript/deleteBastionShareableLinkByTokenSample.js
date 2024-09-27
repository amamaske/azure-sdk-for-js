/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes the Bastion Shareable Links for all the tokens specified in the request.
 *
 * @summary Deletes the Bastion Shareable Links for all the tokens specified in the request.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-03-01/examples/BastionShareableLinkDeleteByToken.json
 */
async function deleteBastionShareableLinksForTheRequestVMS() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const bastionHostName = "bastionhosttenant";
  const bslTokenRequest = {
    tokens: ["abcd1234-efgh-hijk-5678-abcdefgh1234", "dcba4321-hgfe-kjih-8765-hgfedcba4321"],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.beginDeleteBastionShareableLinkByTokenAndWait(
    resourceGroupName,
    bastionHostName,
    bslTokenRequest,
  );
  console.log(result);
}

async function main() {
  deleteBastionShareableLinksForTheRequestVMS();
}

main().catch(console.error);
