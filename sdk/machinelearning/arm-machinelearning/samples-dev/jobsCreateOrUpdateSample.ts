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
  JobBase,
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 *
 * @summary Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Job/AutoMLJob/createOrUpdate.json
 */
async function createOrUpdateAutoMlJob() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const id = "string";
  const body: JobBase = {
    properties: {
      description: "string",
      computeId: "string",
      displayName: "string",
      environmentId: "string",
      environmentVariables: { string: "string" },
      experimentName: "string",
      identity: { identityType: "AMLToken" },
      isArchived: false,
      jobType: "AutoML",
      outputs: {
        string: {
          description: "string",
          jobOutputType: "uri_file",
          mode: "ReadWriteMount",
          uri: "string",
        },
      },
      properties: { string: "string" },
      resources: {
        instanceCount: 1,
        instanceType: "string",
        properties: {
          string: { "9bec0ab0-c62f-4fa9-a97c-7b24bbcc90ad": null },
        },
      },
      services: {
        string: {
          endpoint: "string",
          jobServiceType: "string",
          port: 1,
          properties: { string: "string" },
        },
      },
      tags: { string: "string" },
      taskDetails: {
        limitSettings: { maxTrials: 2 },
        modelSettings: { validationCropSize: 2 },
        searchSpace: [{ validationCropSize: "choice(2, 360)" }],
        targetColumnName: "string",
        taskType: "ImageClassification",
        trainingData: { jobInputType: "mltable", uri: "string" },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.jobs.createOrUpdate(
    resourceGroupName,
    workspaceName,
    id,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 *
 * @summary Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Job/CommandJob/createOrUpdate.json
 */
async function createOrUpdateCommandJob() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const id = "string";
  const body: JobBase = {
    properties: {
      description: "string",
      codeId: "string",
      command: "string",
      computeId: "string",
      displayName: "string",
      distribution: {
        distributionType: "TensorFlow",
        parameterServerCount: 1,
        workerCount: 1,
      },
      environmentId: "string",
      environmentVariables: { string: "string" },
      experimentName: "string",
      identity: { identityType: "AMLToken" },
      inputs: {
        string: {
          description: "string",
          jobInputType: "literal",
          value: "string",
        },
      },
      jobType: "Command",
      limits: { jobLimitsType: "Command", timeout: "PT5M" },
      outputs: {
        string: {
          description: "string",
          jobOutputType: "uri_file",
          mode: "ReadWriteMount",
          uri: "string",
        },
      },
      properties: { string: "string" },
      resources: {
        instanceCount: 1,
        instanceType: "string",
        properties: {
          string: { "e6b6493e-7d5e-4db3-be1e-306ec641327e": null },
        },
      },
      services: {
        string: {
          endpoint: "string",
          jobServiceType: "string",
          port: 1,
          properties: { string: "string" },
        },
      },
      tags: { string: "string" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.jobs.createOrUpdate(
    resourceGroupName,
    workspaceName,
    id,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 *
 * @summary Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Job/PipelineJob/createOrUpdate.json
 */
async function createOrUpdatePipelineJob() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const id = "string";
  const body: JobBase = {
    properties: {
      description: "string",
      computeId: "string",
      displayName: "string",
      experimentName: "string",
      inputs: {
        string: {
          description: "string",
          jobInputType: "literal",
          value: "string",
        },
      },
      jobType: "Pipeline",
      outputs: {
        string: {
          description: "string",
          jobOutputType: "uri_file",
          mode: "Upload",
          uri: "string",
        },
      },
      properties: { string: "string" },
      services: {
        string: {
          endpoint: "string",
          jobServiceType: "string",
          port: 1,
          properties: { string: "string" },
        },
      },
      settings: {},
      tags: { string: "string" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.jobs.createOrUpdate(
    resourceGroupName,
    workspaceName,
    id,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 *
 * @summary Creates and executes a Job.
For update case, the Tags in the definition passed in will replace Tags in the existing job.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Job/SweepJob/createOrUpdate.json
 */
async function createOrUpdateSweepJob() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const id = "string";
  const body: JobBase = {
    properties: {
      description: "string",
      computeId: "string",
      displayName: "string",
      earlyTermination: {
        delayEvaluation: 1,
        evaluationInterval: 1,
        policyType: "MedianStopping",
      },
      experimentName: "string",
      jobType: "Sweep",
      limits: {
        jobLimitsType: "Sweep",
        maxConcurrentTrials: 1,
        maxTotalTrials: 1,
        trialTimeout: "PT1S",
      },
      objective: { goal: "Minimize", primaryMetric: "string" },
      properties: { string: "string" },
      samplingAlgorithm: { samplingAlgorithmType: "Grid" },
      searchSpace: { string: {} },
      services: {
        string: {
          endpoint: "string",
          jobServiceType: "string",
          port: 1,
          properties: { string: "string" },
        },
      },
      tags: { string: "string" },
      trial: {
        codeId: "string",
        command: "string",
        distribution: { distributionType: "Mpi", processCountPerInstance: 1 },
        environmentId: "string",
        environmentVariables: { string: "string" },
        resources: {
          instanceCount: 1,
          instanceType: "string",
          properties: {
            string: { "e6b6493e-7d5e-4db3-be1e-306ec641327e": null },
          },
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.jobs.createOrUpdate(
    resourceGroupName,
    workspaceName,
    id,
    body,
  );
  console.log(result);
}

async function main() {
  await createOrUpdateAutoMlJob();
  await createOrUpdateCommandJob();
  await createOrUpdatePipelineJob();
  await createOrUpdateSweepJob();
}

main().catch(console.error);
