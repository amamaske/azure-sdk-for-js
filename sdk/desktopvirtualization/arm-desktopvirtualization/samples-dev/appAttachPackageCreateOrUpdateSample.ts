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
  AppAttachPackage,
  DesktopVirtualizationAPIClient,
} from "@azure/arm-desktopvirtualization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update an App Attach package.
 *
 * @summary Create or update an App Attach package.
 * x-ms-original-file: specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/stable/2024-04-03/examples/AppAttachPackage_Create.json
 */
async function appAttachPackageCreate(): Promise<void> {
  const subscriptionId =
    process.env["DESKTOPVIRTUALIZATION_SUBSCRIPTION_ID"] ||
    "daefabc0-95b4-48b3-b645-8a753a63c4fa";
  const resourceGroupName =
    process.env["DESKTOPVIRTUALIZATION_RESOURCE_GROUP"] || "resourceGroup1";
  const appAttachPackageName = "msixpackagefullname";
  const appAttachPackage: AppAttachPackage = {
    location: "southcentralus",
    properties: {
      failHealthCheckOnStagingFailure: "NeedsAssistance",
      hostPoolReferences: [],
      image: {
        certificateExpiry: new Date("2023-01-02T17:18:19.1234567Z"),
        certificateName: "certName",
        displayName: "displayname",
        imagePath: "imagepath",
        isActive: false,
        isRegularRegistration: false,
        lastUpdated: new Date("2008-09-22T14:01:54.9571247Z"),
        packageAlias: "msixpackagealias",
        packageApplications: [
          {
            description: "PackageApplicationDescription",
            appId: "AppId",
            appUserModelID: "AppUserModelId",
            friendlyName: "FriendlyName",
            iconImageName: "Iconimagename",
            rawIcon: Buffer.from("VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo"),
            rawPng: Buffer.from("VGhpcyBpcyBhIHN0cmluZyB0byBoYXNo"),
          },
        ],
        packageDependencies: [
          {
            dependencyName: "MsixPackage_Dependency_Name",
            minVersion: "packageDep_version",
            publisher: "MsixPackage_Dependency_Publisher",
          },
        ],
        packageFamilyName: "MsixPackage_FamilyName",
        packageFullName: "MsixPackage_FullName",
        packageName: "MsixPackageName",
        packageRelativePath: "packagerelativepath",
        version: "packageversion",
      },
      keyVaultURL: "",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DesktopVirtualizationAPIClient(credential, subscriptionId);
  const result = await client.appAttachPackageOperations.createOrUpdate(
    resourceGroupName,
    appAttachPackageName,
    appAttachPackage,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await appAttachPackageCreate();
}

main().catch(console.error);
