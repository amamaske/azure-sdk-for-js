/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ResourceSyncRules } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CustomLocationsManagementClient } from "../customLocationsManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  ResourceSyncRule,
  ResourceSyncRulesListByCustomLocationIDNextOptionalParams,
  ResourceSyncRulesListByCustomLocationIDOptionalParams,
  ResourceSyncRulesListByCustomLocationIDResponse,
  ResourceSyncRulesGetOptionalParams,
  ResourceSyncRulesGetResponse,
  ResourceSyncRulesCreateOrUpdateOptionalParams,
  ResourceSyncRulesCreateOrUpdateResponse,
  ResourceSyncRulesDeleteOptionalParams,
  ResourceSyncRulesUpdateOptionalParams,
  ResourceSyncRulesUpdateResponse,
  ResourceSyncRulesListByCustomLocationIDNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceSyncRules operations. */
export class ResourceSyncRulesImpl implements ResourceSyncRules {
  private readonly client: CustomLocationsManagementClient;

  /**
   * Initialize a new instance of the class ResourceSyncRules class.
   * @param client Reference to the service client
   */
  constructor(client: CustomLocationsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of Resource Sync Rules in the specified subscription. The operation returns properties
   * of each Resource Sync Rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param options The options parameters.
   */
  public listByCustomLocationID(
    resourceGroupName: string,
    resourceName: string,
    options?: ResourceSyncRulesListByCustomLocationIDOptionalParams
  ): PagedAsyncIterableIterator<ResourceSyncRule> {
    const iter = this.listByCustomLocationIDPagingAll(
      resourceGroupName,
      resourceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByCustomLocationIDPagingPage(
          resourceGroupName,
          resourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByCustomLocationIDPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: ResourceSyncRulesListByCustomLocationIDOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceSyncRule[]> {
    let result: ResourceSyncRulesListByCustomLocationIDResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCustomLocationID(
        resourceGroupName,
        resourceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCustomLocationIDNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCustomLocationIDPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: ResourceSyncRulesListByCustomLocationIDOptionalParams
  ): AsyncIterableIterator<ResourceSyncRule> {
    for await (const page of this.listByCustomLocationIDPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of Resource Sync Rules in the specified subscription. The operation returns properties
   * of each Resource Sync Rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param options The options parameters.
   */
  private _listByCustomLocationID(
    resourceGroupName: string,
    resourceName: string,
    options?: ResourceSyncRulesListByCustomLocationIDOptionalParams
  ): Promise<ResourceSyncRulesListByCustomLocationIDResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listByCustomLocationIDOperationSpec
    );
  }

  /**
   * Gets the details of the resourceSyncRule with a specified resource group, subscription id Custom
   * Location resource name and Resource Sync Rule name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesGetOptionalParams
  ): Promise<ResourceSyncRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, childResourceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a Resource Sync Rule in the parent Custom Location, Subscription Id and Resource
   * Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param parameters Parameters supplied to create or update a Resource Sync Rule.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    parameters: ResourceSyncRule,
    options?: ResourceSyncRulesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourceSyncRulesCreateOrUpdateResponse>,
      ResourceSyncRulesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourceSyncRulesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        resourceName,
        childResourceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a Resource Sync Rule in the parent Custom Location, Subscription Id and Resource
   * Group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param parameters Parameters supplied to create or update a Resource Sync Rule.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    parameters: ResourceSyncRule,
    options?: ResourceSyncRulesCreateOrUpdateOptionalParams
  ): Promise<ResourceSyncRulesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceName,
      childResourceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the Resource Sync Rule with the specified Resource Sync Rule Name, Custom Location Resource
   * Name, Resource Group, and Subscription Id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, childResourceName, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates a Resource Sync Rule with the specified Resource Sync Rule name in the specified Resource
   * Group, Subscription and Custom Location name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourceSyncRulesUpdateResponse>,
      ResourceSyncRulesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourceSyncRulesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, resourceName, childResourceName, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a Resource Sync Rule with the specified Resource Sync Rule name in the specified Resource
   * Group, Subscription and Custom Location name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param childResourceName Resource Sync Rule name.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    childResourceName: string,
    options?: ResourceSyncRulesUpdateOptionalParams
  ): Promise<ResourceSyncRulesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      resourceName,
      childResourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByCustomLocationIDNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName Custom Locations name.
   * @param nextLink The nextLink from the previous successful call to the ListByCustomLocationID method.
   * @param options The options parameters.
   */
  private _listByCustomLocationIDNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: ResourceSyncRulesListByCustomLocationIDNextOptionalParams
  ): Promise<ResourceSyncRulesListByCustomLocationIDNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listByCustomLocationIDNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByCustomLocationIDOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/resourceSyncRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSyncRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/resourceSyncRules/{childResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.childResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/resourceSyncRules/{childResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    201: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    202: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    204: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.childResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/resourceSyncRules/{childResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.childResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ExtendedLocation/customLocations/{resourceName}/resourceSyncRules/{childResourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    201: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    202: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    204: {
      bodyMapper: Mappers.ResourceSyncRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: {
    parameterPath: {
      tags: ["options", "tags"],
      priority: ["options", "priority"],
      selector: ["options", "selector"],
      targetResourceGroup: ["options", "targetResourceGroup"]
    },
    mapper: { ...Mappers.PatchableResourceSyncRule, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.childResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByCustomLocationIDNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSyncRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
