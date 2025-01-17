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
  Output,
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_DeltaLake.json
 */
async function createADeltaLakeOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "output1221";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/Blob",
      container: "deltaoutput",
      dateFormat: undefined,
      pathPattern: undefined,
      storageAccounts: [
        { accountKey: "accountKey==", accountName: "someAccountName" },
      ],
      timeFormat: undefined,
    },
    serialization: {
      type: "Delta",
      deltaTablePath: "/folder1/table1",
      partitionColumns: ["column1"],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_DocumentDB.json
 */
async function createADocumentDbOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/DocumentDB",
      accountId: "someAccountId",
      accountKey: "accountKey==",
      authenticationMode: "Msi",
      collectionNamePattern: "collection",
      database: "db01",
      documentId: "documentId",
      partitionKey: "key",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_GatewayMessageBus.json
 */
async function createAGatewayMessageBusOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const output: Output = {
    datasource: { type: "GatewayMessageBus", topic: "EdgeTopic1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_PostgreSQL.json
 */
async function createAPostgreSqlOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const output: Output = {
    datasource: {
      type: "Microsoft.DBForPostgreSQL/servers/databases",
      authenticationMode: "Msi",
      database: "someDatabase",
      maxWriterCount: 1,
      password: "somePassword",
      server: "someServer",
      table: "someTable",
      user: "user",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_PowerBI.json
 */
async function createAPowerBiOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const output: Output = {
    datasource: {
      type: "PowerBI",
      dataset: "someDataset",
      groupId: "ac40305e-3e8d-43ac-8161-c33799f43e95",
      groupName: "MyPowerBIGroup",
      refreshToken: "someRefreshToken==",
      table: "someTable",
      tokenUserDisplayName: "Bob Smith",
      tokenUserPrincipalName: "bobsmith@contoso.com",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_ServiceBusQueue_Avro.json
 */
async function createAServiceBusQueueOutputWithAvroSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg3410";
  const jobName = "sj5095";
  const outputName = "output3456";
  const output: Output = {
    datasource: {
      type: "Microsoft.ServiceBus/Queue",
      propertyColumns: ["column1", "column2"],
      queueName: "sdkqueue",
      serviceBusNamespace: "sdktest",
      sharedAccessPolicyKey: "sharedAccessPolicyKey=",
      sharedAccessPolicyName: "RootManageSharedAccessKey",
      systemPropertyColumns: { MessageId: "col3", PartitionKey: "col4" },
    },
    serialization: { type: "Avro" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_ServiceBusTopic_CSV.json
 */
async function createAServiceBusTopicOutputWithCsvSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6450";
  const jobName = "sj7094";
  const outputName = "output7886";
  const output: Output = {
    datasource: {
      type: "Microsoft.ServiceBus/Topic",
      propertyColumns: ["column1", "column2"],
      serviceBusNamespace: "sdktest",
      sharedAccessPolicyKey: "sharedAccessPolicyKey=",
      sharedAccessPolicyName: "RootManageSharedAccessKey",
      topicName: "sdktopic",
    },
    serialization: { type: "Csv", encoding: "UTF8", fieldDelimiter: "," },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_Blob_CSV.json
 */
async function createABlobOutputWithCsvSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg5023";
  const jobName = "sj900";
  const outputName = "output1623";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/Blob",
      blobPathPrefix: "my/path",
      blobWriteMode: "Once",
      container: "state",
      dateFormat: "yyyy/MM/dd",
      pathPattern: "{date}/{time}",
      storageAccounts: [
        { accountKey: "accountKey==", accountName: "someAccountName" },
      ],
      timeFormat: "HH",
    },
    serialization: { type: "Csv", encoding: "UTF8", fieldDelimiter: "," },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_AzureDataExplorer.json
 */
async function createAnAzureDataExplorerOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "adxOutput";
  const output: Output = {
    datasource: {
      type: "Microsoft.Kusto/clusters/databases",
      authenticationMode: "Msi",
      cluster: "https://asakustotest.eastus.kusto.windows.net",
      database: "dbname",
      table: "mytable",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_AzureDataLakeStore_JSON.json
 */
async function createAnAzureDataLakeStoreOutputWithJsonSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6912";
  const jobName = "sj3310";
  const outputName = "output5195";
  const output: Output = {
    datasource: {
      type: "Microsoft.DataLake/Accounts",
      accountName: "someaccount",
      dateFormat: "yyyy/MM/dd",
      filePathPrefix: "{date}/{time}",
      refreshToken: "someRefreshToken==",
      tenantId: "cea4e98b-c798-49e7-8c40-4a2b3beb47dd",
      timeFormat: "HH",
      tokenUserDisplayName: "Bob Smith",
      tokenUserPrincipalName: "bobsmith@contoso.com",
    },
    serialization: { type: "Json", format: "Array", encoding: "UTF8" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_DataWarehouse.json
 */
async function createAnAzureDataWarehouseOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "dwOutput";
  const output: Output = {
    datasource: {
      type: "Microsoft.Sql/Server/DataWarehouse",
      authenticationMode: "Msi",
      database: "zhayaSQLpool",
      password: "",
      server: "asatestserver",
      table: "test2",
      user: "tolladmin",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_AzureFunction.json
 */
async function createAnAzureFunctionOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "azureFunction1";
  const output: Output = {
    datasource: {
      type: "Microsoft.AzureFunction",
      apiKey: undefined,
      functionAppName: "functionappforasaautomation",
      functionName: "HttpTrigger2",
      maxBatchCount: 100,
      maxBatchSize: 256,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_AzureSQL.json
 */
async function createAnAzureSqlDatabaseOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg2157";
  const jobName = "sj6458";
  const outputName = "output1755";
  const output: Output = {
    datasource: {
      type: "Microsoft.Sql/Server/Database",
      database: "someDatabase",
      password: "somePassword",
      server: "someServer",
      table: "someTable",
      user: "<user>",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_AzureTable.json
 */
async function createAnAzureTableOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg5176";
  const jobName = "sj2790";
  const outputName = "output958";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/Table",
      accountKey: "accountKey==",
      accountName: "someAccountName",
      batchSize: 25,
      columnsToRemove: ["column1", "column2"],
      partitionKey: "partitionKey",
      rowKey: "rowKey",
      table: "samples",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates an output or replaces an already existing output under an existing streaming job.
 *
 * @summary Creates an output or replaces an already existing output under an existing streaming job.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Create_EventHub_JSON.json
 */
async function createAnEventHubOutputWithJsonSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6912";
  const jobName = "sj3310";
  const outputName = "output5195";
  const output: Output = {
    datasource: {
      type: "Microsoft.ServiceBus/EventHub",
      eventHubName: "sdkeventhub",
      partitionKey: "partitionKey",
      serviceBusNamespace: "sdktest",
      sharedAccessPolicyKey: "sharedAccessPolicyKey=",
      sharedAccessPolicyName: "RootManageSharedAccessKey",
    },
    serialization: { type: "Json", format: "Array", encoding: "UTF8" },
    watermarkSettings: {
      maxWatermarkDifferenceAcrossPartitions: "16:14:30",
      watermarkMode: "SendCurrentPartitionWatermark",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.createOrReplace(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

async function main() {
  await createADeltaLakeOutput();
  await createADocumentDbOutput();
  await createAGatewayMessageBusOutput();
  await createAPostgreSqlOutput();
  await createAPowerBiOutput();
  await createAServiceBusQueueOutputWithAvroSerialization();
  await createAServiceBusTopicOutputWithCsvSerialization();
  await createABlobOutputWithCsvSerialization();
  await createAnAzureDataExplorerOutput();
  await createAnAzureDataLakeStoreOutputWithJsonSerialization();
  await createAnAzureDataWarehouseOutput();
  await createAnAzureFunctionOutput();
  await createAnAzureSqlDatabaseOutput();
  await createAnAzureTableOutput();
  await createAnEventHubOutputWithJsonSerialization();
}

main().catch(console.error);
