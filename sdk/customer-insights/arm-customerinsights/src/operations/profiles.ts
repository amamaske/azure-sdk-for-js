/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Profiles } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CustomerInsightsManagementClient } from "../customerInsightsManagementClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  ProfileResourceFormat,
  ProfilesListByHubNextOptionalParams,
  ProfilesListByHubOptionalParams,
  ProfilesListByHubResponse,
  ProfilesCreateOrUpdateOptionalParams,
  ProfilesCreateOrUpdateResponse,
  ProfilesGetOptionalParams,
  ProfilesGetResponse,
  ProfilesDeleteOptionalParams,
  ProfilesGetEnrichingKpisOptionalParams,
  ProfilesGetEnrichingKpisResponse,
  ProfilesListByHubNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Profiles operations. */
export class ProfilesImpl implements Profiles {
  private readonly client: CustomerInsightsManagementClient;

  /**
   * Initialize a new instance of the class Profiles class.
   * @param client Reference to the service client
   */
  constructor(client: CustomerInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets all profile in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  public listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: ProfilesListByHubOptionalParams
  ): PagedAsyncIterableIterator<ProfileResourceFormat> {
    const iter = this.listByHubPagingAll(resourceGroupName, hubName, options);
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
        return this.listByHubPagingPage(
          resourceGroupName,
          hubName,
          options,
          settings
        );
      }
    };
  }

  private async *listByHubPagingPage(
    resourceGroupName: string,
    hubName: string,
    options?: ProfilesListByHubOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProfileResourceFormat[]> {
    let result: ProfilesListByHubResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHub(resourceGroupName, hubName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHubNext(
        resourceGroupName,
        hubName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHubPagingAll(
    resourceGroupName: string,
    hubName: string,
    options?: ProfilesListByHubOptionalParams
  ): AsyncIterableIterator<ProfileResourceFormat> {
    for await (const page of this.listByHubPagingPage(
      resourceGroupName,
      hubName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a profile within a Hub, or updates an existing profile.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param parameters Parameters supplied to the create/delete Profile type operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    hubName: string,
    profileName: string,
    parameters: ProfileResourceFormat,
    options?: ProfilesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProfilesCreateOrUpdateResponse>,
      ProfilesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProfilesCreateOrUpdateResponse> => {
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
      { resourceGroupName, hubName, profileName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a profile within a Hub, or updates an existing profile.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param parameters Parameters supplied to the create/delete Profile type operation
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hubName: string,
    profileName: string,
    parameters: ProfileResourceFormat,
    options?: ProfilesCreateOrUpdateOptionalParams
  ): Promise<ProfilesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      hubName,
      profileName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified profile.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    profileName: string,
    options?: ProfilesGetOptionalParams
  ): Promise<ProfilesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, profileName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a profile within a hub
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    hubName: string,
    profileName: string,
    options?: ProfilesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, hubName, profileName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a profile within a hub
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    hubName: string,
    profileName: string,
    options?: ProfilesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      hubName,
      profileName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all profile in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  private _listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: ProfilesListByHubOptionalParams
  ): Promise<ProfilesListByHubResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, options },
      listByHubOperationSpec
    );
  }

  /**
   * Gets the KPIs that enrich the profile Type identified by the supplied name. Enrichment happens
   * through participants of the Interaction on an Interaction KPI and through Relationships for Profile
   * KPIs.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param profileName The name of the profile.
   * @param options The options parameters.
   */
  getEnrichingKpis(
    resourceGroupName: string,
    hubName: string,
    profileName: string,
    options?: ProfilesGetEnrichingKpisOptionalParams
  ): Promise<ProfilesGetEnrichingKpisResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, profileName, options },
      getEnrichingKpisOperationSpec
    );
  }

  /**
   * ListByHubNext
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param nextLink The nextLink from the previous successful call to the ListByHub method.
   * @param options The options parameters.
   */
  private _listByHubNext(
    resourceGroupName: string,
    hubName: string,
    nextLink: string,
    options?: ProfilesListByHubNextOptionalParams
  ): Promise<ProfilesListByHubNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hubName, nextLink, options },
      listByHubNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResourceFormat
    },
    201: {
      bodyMapper: Mappers.ProfileResourceFormat
    },
    202: {
      bodyMapper: Mappers.ProfileResourceFormat
    },
    204: {
      bodyMapper: Mappers.ProfileResourceFormat
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.profileName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileResourceFormat
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.profileName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.profileName1
  ],
  serializer
};
const listByHubOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEnrichingKpisOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/profiles/{profileName}/getEnrichingKpis",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "KpiDefinition" } }
        }
      }
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1,
    Parameters.profileName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHubNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProfileListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.localeCode],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hubName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
