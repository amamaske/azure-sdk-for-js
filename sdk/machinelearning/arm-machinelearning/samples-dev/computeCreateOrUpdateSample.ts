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
  ComputeResource,
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/KubernetesCompute.json
 */
async function attachAKubernetesCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      description: "some compute",
      computeType: "Kubernetes",
      properties: {
        defaultInstanceType: "defaultInstanceType",
        instanceTypes: {
          defaultInstanceType: {
            nodeSelector: {},
            resources: {
              limits: { cpu: "1", memory: "4Gi", "nvidiaCom/gpu": "" },
              requests: { cpu: "1", memory: "4Gi", "nvidiaCom/gpu": "" },
            },
          },
        },
        namespace: "default",
      },
      resourceId:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/Microsoft.ContainerService/managedClusters/compute123-56826-c9b00420020b2",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/BasicAmlCompute.json
 */
async function createAAmlCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      computeType: "AmlCompute",
      properties: {
        enableNodePublicIp: true,
        isolatedNetwork: false,
        osType: "Windows",
        remoteLoginPortPublicAccess: "NotSpecified",
        scaleSettings: {
          maxNodeCount: 1,
          minNodeCount: 0,
          nodeIdleTimeBeforeScaleDown: "PT5M",
        },
        virtualMachineImage: {
          id: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/myImageGallery/images/myImageDefinition/versions/0.0.1",
        },
        vmPriority: "Dedicated",
        vmSize: "STANDARD_NC6",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/BasicDataFactoryCompute.json
 */
async function createADataFactoryCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: { computeType: "DataFactory" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/BasicAKSCompute.json
 */
async function createAnAksCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: { computeType: "AKS" },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/ComputeInstance.json
 */
async function createAnComputeInstanceCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      computeType: "ComputeInstance",
      properties: {
        applicationSharingPolicy: "Personal",
        computeInstanceAuthorizationType: "personal",
        customServices: [
          {
            name: "rstudio",
            docker: { privileged: true },
            endpoints: [
              {
                name: "connect",
                published: 8787,
                target: 8787,
                protocol: "http",
              },
            ],
            environmentVariables: {
              testVariable: { type: "local", value: "test_value" },
            },
            image: {
              type: "docker",
              reference: "ghcr.io/azure/rocker-rstudio-ml-verse:latest",
            },
            volumes: [
              {
                type: "bind",
                readOnly: false,
                source: "/home/azureuser/cloudfiles",
                target: "/home/azureuser/cloudfiles",
              },
            ],
          },
        ],
        personalComputeInstanceSettings: {
          assignedUser: {
            objectId: "00000000-0000-0000-0000-000000000000",
            tenantId: "00000000-0000-0000-0000-000000000000",
          },
        },
        sshSettings: { sshPublicAccess: "Disabled" },
        subnet: { id: "test-subnet-resource-id" },
        vmSize: "STANDARD_NC6",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/ComputeInstanceWithSchedules.json
 */
async function createAnComputeInstanceComputeWithSchedules() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      computeType: "ComputeInstance",
      properties: {
        applicationSharingPolicy: "Personal",
        computeInstanceAuthorizationType: "personal",
        personalComputeInstanceSettings: {
          assignedUser: {
            objectId: "00000000-0000-0000-0000-000000000000",
            tenantId: "00000000-0000-0000-0000-000000000000",
          },
        },
        schedules: {
          computeStartStop: [
            {
              action: "Stop",
              cron: {
                expression: "0 18 * * *",
                startTime: "2021-04-23T01:30:00",
                timeZone: "Pacific Standard Time",
              },
              status: "Enabled",
              triggerType: "Cron",
            },
          ],
        },
        sshSettings: { sshPublicAccess: "Disabled" },
        vmSize: "STANDARD_NC6",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/ComputeInstanceMinimal.json
 */
async function createAnComputeInstanceComputeWithMinimalInputs() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      computeType: "ComputeInstance",
      properties: { vmSize: "STANDARD_NC6" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/AmlCompute.json
 */
async function updateAAmlCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      description: "some compute",
      computeType: "AmlCompute",
      properties: {
        scaleSettings: {
          maxNodeCount: 4,
          minNodeCount: 4,
          nodeIdleTimeBeforeScaleDown: "PT5M",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 *
 * @summary Creates or updates compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation. If your intent is to create a new compute, do a GET first to verify that it does not exist yet.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/createOrUpdate/AKSCompute.json
 */
async function updateAnAksCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ComputeResource = {
    location: "eastus",
    properties: {
      description: "some compute",
      computeType: "AKS",
      properties: { agentCount: 4 },
      resourceId:
        "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/Microsoft.ContainerService/managedClusters/compute123-56826-c9b00420020b2",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await attachAKubernetesCompute();
  await createAAmlCompute();
  await createADataFactoryCompute();
  await createAnAksCompute();
  await createAnComputeInstanceCompute();
  await createAnComputeInstanceComputeWithSchedules();
  await createAnComputeInstanceComputeWithMinimalInputs();
  await updateAAmlCompute();
  await updateAnAksCompute();
}

main().catch(console.error);
