/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  FrontendEndpoint,
  FrontendEndpointsListByFrontDoorOptionalParams,
  FrontendEndpointsGetOptionalParams,
  FrontendEndpointsGetResponse,
  CustomHttpsConfiguration,
  FrontendEndpointsEnableHttpsOptionalParams,
  FrontendEndpointsDisableHttpsOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FrontendEndpoints. */
export interface FrontendEndpoints {
  /**
   * Lists all of the frontend endpoints within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  listByFrontDoor(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontendEndpointsListByFrontDoorOptionalParams,
  ): PagedAsyncIterableIterator<FrontendEndpoint>;
  /**
   * Gets a Frontend endpoint with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    options?: FrontendEndpointsGetOptionalParams,
  ): Promise<FrontendEndpointsGetResponse>;
  /**
   * Enables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param customHttpsConfiguration The configuration specifying how to enable HTTPS
   * @param options The options parameters.
   */
  beginEnableHttps(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    customHttpsConfiguration: CustomHttpsConfiguration,
    options?: FrontendEndpointsEnableHttpsOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Enables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param customHttpsConfiguration The configuration specifying how to enable HTTPS
   * @param options The options parameters.
   */
  beginEnableHttpsAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    customHttpsConfiguration: CustomHttpsConfiguration,
    options?: FrontendEndpointsEnableHttpsOptionalParams,
  ): Promise<void>;
  /**
   * Disables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The options parameters.
   */
  beginDisableHttps(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    options?: FrontendEndpointsDisableHttpsOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Disables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The options parameters.
   */
  beginDisableHttpsAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    options?: FrontendEndpointsDisableHttpsOptionalParams,
  ): Promise<void>;
}
