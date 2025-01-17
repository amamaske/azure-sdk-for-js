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
  LoadBalancer,
  NetworkManagementClient
} from "@azure/arm-network-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a load balancer.
 *
 * @summary Creates or updates a load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LoadBalancerCreate.json
 */
async function createLoadBalancer() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [{ name: "be-lb" }],
    frontendIPConfigurations: [
      {
        name: "fe-lb",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb"
        }
      }
    ],
    inboundNatPools: [],
    inboundNatRules: [
      {
        name: "in-nat-rule",
        backendPort: 3389,
        enableFloatingIP: true,
        enableTcpReset: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 3389,
        idleTimeoutInMinutes: 15,
        protocol: "Tcp"
      }
    ],
    loadBalancingRules: [
      {
        name: "rulelb",
        backendAddressPool: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb"
        },
        backendPort: 80,
        enableFloatingIP: true,
        enableTcpReset: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 80,
        idleTimeoutInMinutes: 15,
        loadDistribution: "Default",
        probe: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb"
        },
        protocol: "Tcp"
      }
    ],
    probes: [
      {
        name: "probe-lb",
        intervalInSeconds: 15,
        numberOfProbes: 2,
        port: 80,
        requestPath: "healthcheck.aspx",
        protocol: "Http"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a load balancer.
 *
 * @summary Creates or updates a load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LoadBalancerCreateWithZones.json
 */
async function createLoadBalancerWithFrontendIPInZone1() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [{ name: "be-lb" }],
    frontendIPConfigurations: [
      {
        name: "fe-lb",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb"
        },
        zones: ["1"]
      }
    ],
    inboundNatPools: [],
    inboundNatRules: [
      {
        name: "in-nat-rule",
        backendPort: 3389,
        enableFloatingIP: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 3389,
        idleTimeoutInMinutes: 15,
        protocol: "Tcp"
      }
    ],
    loadBalancingRules: [
      {
        name: "rulelb",
        backendAddressPool: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb"
        },
        backendPort: 80,
        enableFloatingIP: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 80,
        idleTimeoutInMinutes: 15,
        loadDistribution: "Default",
        probe: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb"
        },
        protocol: "Tcp"
      }
    ],
    outboundRules: [],
    probes: [
      {
        name: "probe-lb",
        intervalInSeconds: 15,
        numberOfProbes: 2,
        port: 80,
        requestPath: "healthcheck.aspx",
        protocol: "Http"
      }
    ],
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a load balancer.
 *
 * @summary Creates or updates a load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LoadBalancerCreateStandardSku.json
 */
async function createLoadBalancerWithStandardSku() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [{ name: "be-lb" }],
    frontendIPConfigurations: [
      {
        name: "fe-lb",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb"
        }
      }
    ],
    inboundNatPools: [],
    inboundNatRules: [
      {
        name: "in-nat-rule",
        backendPort: 3389,
        enableFloatingIP: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 3389,
        idleTimeoutInMinutes: 15,
        protocol: "Tcp"
      }
    ],
    loadBalancingRules: [
      {
        name: "rulelb",
        backendAddressPool: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb"
        },
        backendPort: 80,
        enableFloatingIP: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 80,
        idleTimeoutInMinutes: 15,
        loadDistribution: "Default",
        probe: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb"
        },
        protocol: "Tcp"
      }
    ],
    outboundRules: [],
    probes: [
      {
        name: "probe-lb",
        intervalInSeconds: 15,
        numberOfProbes: 2,
        port: 80,
        requestPath: "healthcheck.aspx",
        protocol: "Http"
      }
    ],
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a load balancer.
 *
 * @summary Creates or updates a load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LoadBalancerCreateWithInboundNatPool.json
 */
async function createLoadBalancerWithInboundNatPool() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [],
    frontendIPConfigurations: [
      {
        name: "test",
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/test",
        privateIPAllocationMethod: "Dynamic",
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/lbvnet/subnets/lbsubnet",
          resourceNavigationLinks: [],
          serviceEndpoints: []
        },
        zones: []
      }
    ],
    inboundNatPools: [
      {
        name: "test",
        backendPort: 8888,
        enableFloatingIP: true,
        enableTcpReset: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/test"
        },
        frontendPortRangeEnd: 8085,
        frontendPortRangeStart: 8080,
        id:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/inboundNatPools/test",
        idleTimeoutInMinutes: 10,
        protocol: "Tcp"
      }
    ],
    inboundNatRules: [],
    loadBalancingRules: [],
    outboundRules: [],
    probes: [],
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a load balancer.
 *
 * @summary Creates or updates a load balancer.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/LoadBalancerCreateWithOutboundRules.json
 */
async function createLoadBalancerWithOutboundRules() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const loadBalancerName = "lb";
  const parameters: LoadBalancer = {
    backendAddressPools: [{ name: "be-lb" }],
    frontendIPConfigurations: [
      {
        name: "fe-lb",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pip"
        }
      }
    ],
    inboundNatPools: [],
    inboundNatRules: [
      {
        name: "in-nat-rule",
        backendPort: 3389,
        enableFloatingIP: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 3389,
        idleTimeoutInMinutes: 15,
        protocol: "Tcp"
      }
    ],
    loadBalancingRules: [
      {
        name: "rulelb",
        backendAddressPool: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb"
        },
        backendPort: 80,
        disableOutboundSnat: true,
        enableFloatingIP: true,
        frontendIPConfiguration: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
        },
        frontendPort: 80,
        idleTimeoutInMinutes: 15,
        loadDistribution: "Default",
        probe: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb"
        },
        protocol: "Tcp"
      }
    ],
    location: "eastus",
    outboundRules: [
      {
        name: "rule1",
        backendAddressPool: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb"
        },
        frontendIPConfigurations: [
          {
            id:
              "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb"
          }
        ],
        protocol: "All"
      }
    ],
    probes: [
      {
        name: "probe-lb",
        intervalInSeconds: 15,
        numberOfProbes: 2,
        port: 80,
        requestPath: "healthcheck.aspx",
        protocol: "Http"
      }
    ],
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    loadBalancerName,
    parameters
  );
  console.log(result);
}

async function main() {
  await createLoadBalancer();
  await createLoadBalancerWithFrontendIPInZone1();
  await createLoadBalancerWithStandardSku();
  await createLoadBalancerWithInboundNatPool();
  await createLoadBalancerWithOutboundRules();
}

main().catch(console.error);
