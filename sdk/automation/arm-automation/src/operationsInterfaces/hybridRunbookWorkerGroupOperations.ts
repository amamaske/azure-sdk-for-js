/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  HybridRunbookWorkerGroup,
  HybridRunbookWorkerGroupListByAutomationAccountOptionalParams,
  HybridRunbookWorkerGroupDeleteOptionalParams,
  HybridRunbookWorkerGroupGetOptionalParams,
  HybridRunbookWorkerGroupGetResponse,
  HybridRunbookWorkerGroupCreateOrUpdateParameters,
  HybridRunbookWorkerGroupCreateOptionalParams,
  HybridRunbookWorkerGroupCreateResponse,
  HybridRunbookWorkerGroupUpdateOptionalParams,
  HybridRunbookWorkerGroupUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a HybridRunbookWorkerGroupOperations. */
export interface HybridRunbookWorkerGroupOperations {
  /**
   * Retrieve a list of hybrid runbook worker groups.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: HybridRunbookWorkerGroupListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<HybridRunbookWorkerGroup>;
  /**
   * Delete a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkerGroupDeleteOptionalParams
  ): Promise<void>;
  /**
   * Retrieve a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    options?: HybridRunbookWorkerGroupGetOptionalParams
  ): Promise<HybridRunbookWorkerGroupGetResponse>;
  /**
   * Create a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerGroupCreationParameters The create or update parameters for hybrid runbook
   *                                                   worker group.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerGroupCreationParameters: HybridRunbookWorkerGroupCreateOrUpdateParameters,
    options?: HybridRunbookWorkerGroupCreateOptionalParams
  ): Promise<HybridRunbookWorkerGroupCreateResponse>;
  /**
   * Update a hybrid runbook worker group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param hybridRunbookWorkerGroupName The hybrid runbook worker group name
   * @param hybridRunbookWorkerGroupUpdationParameters The hybrid runbook worker group
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    hybridRunbookWorkerGroupName: string,
    hybridRunbookWorkerGroupUpdationParameters: HybridRunbookWorkerGroupCreateOrUpdateParameters,
    options?: HybridRunbookWorkerGroupUpdateOptionalParams
  ): Promise<HybridRunbookWorkerGroupUpdateResponse>;
}
