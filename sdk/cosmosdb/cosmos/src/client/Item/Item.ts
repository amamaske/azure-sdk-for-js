// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ClientContext } from "../../ClientContext";
import type { DiagnosticNodeInternal } from "../../diagnostics/DiagnosticNodeInternal";
import {
  createDocumentUri,
  getIdFromLink,
  getPathFromLink,
  isItemResourceValid,
  ResourceType,
  StatusCodes,
} from "../../common";
import type { PartitionKey, PartitionKeyInternal } from "../../documents";
import { convertToInternalPartitionKey } from "../../documents";
import type { RequestOptions, Response } from "../../request";
import type { PatchRequestBody } from "../../utils/patch";
import type { Container } from "../Container";
import type { Resource } from "../Resource";
import type { ItemDefinition } from "./ItemDefinition";
import { ItemResponse } from "./ItemResponse";
import { getEmptyCosmosDiagnostics, withDiagnostics } from "../../utils/diagnostics";
import { setPartitionKeyIfUndefined } from "../../extractPartitionKey";

/**
 * Used to perform operations on a specific item.
 *
 * @see {@link Items} for operations on all items; see `container.items`.
 */
export class Item {
  private partitionKey: PartitionKeyInternal;
  /**
   * Returns a reference URL to the resource. Used for linking in Permissions.
   */
  public get url(): string {
    return createDocumentUri(this.container.database.id, this.container.id, this.id);
  }

  /**
   * @hidden
   * @param container - The parent {@link Container}.
   * @param id - The id of the given {@link Item}.
   * @param partitionKey - The primary key of the given {@link Item} (only for partitioned containers).
   */
  constructor(
    public readonly container: Container,
    private readonly clientContext: ClientContext,
    public readonly id?: string,
    partitionKey?: PartitionKey,
  ) {
    this.partitionKey =
      partitionKey === undefined ? undefined : convertToInternalPartitionKey(partitionKey);
  }

  /**
   * Read the item's definition.
   *
   * Any provided type, T, is not necessarily enforced by the SDK.
   * You may get more or less properties and it's up to your logic to enforce it.
   * If the type, T, is a class, it won't pass `typeof` comparisons, because it won't have a match prototype.
   * It's recommended to only use interfaces.
   *
   * There is no set schema for JSON items. They may contain any number of custom properties.
   *
   * @param options - Additional options for the request
   *
   * @example Using custom type for response
   * ```typescript
   * interface TodoItem {
   *   title: string;
   *   done: bool;
   *   id: string;
   * }
   *
   * let item: TodoItem;
   * ({body: item} = await item.read<TodoItem>());
   * ```
   */
  public async read<T extends ItemDefinition = any>(
    options: RequestOptions = {},
  ): Promise<ItemResponse<T>> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      this.partitionKey = await setPartitionKeyIfUndefined(
        diagnosticNode,
        this.container,
        this.partitionKey,
      );
      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);
      let response: Response<T & Resource>;
      try {
        response = await this.clientContext.read<T>({
          path,
          resourceType: ResourceType.item,
          resourceId: id,
          options,
          partitionKey: this.partitionKey,
          diagnosticNode,
        });
      } catch (error: any) {
        if (error.code !== StatusCodes.NotFound) {
          throw error;
        }
        response = error;
      }

      return new ItemResponse(
        response.result,
        response.headers,
        response.code,
        response.substatus,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Replace the item's definition.
   *
   * There is no set schema for JSON items. They may contain any number of custom properties.
   *
   * @param body - The definition to replace the existing {@link Item}'s definition with.
   * @param options - Additional options for the request
   */
  public replace(
    body: ItemDefinition,
    options?: RequestOptions,
  ): Promise<ItemResponse<ItemDefinition>>;
  /**
   * Replace the item's definition.
   *
   * Any provided type, T, is not necessarily enforced by the SDK.
   * You may get more or less properties and it's up to your logic to enforce it.
   *
   * There is no set schema for JSON items. They may contain any number of custom properties.
   *
   * @param body - The definition to replace the existing {@link Item}'s definition with.
   * @param options - Additional options for the request
   */
  public replace<T extends ItemDefinition>(
    body: T,
    options?: RequestOptions,
  ): Promise<ItemResponse<T>>;
  public async replace<T extends ItemDefinition>(
    body: T,
    options: RequestOptions = {},
  ): Promise<ItemResponse<T>> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      this.partitionKey = await setPartitionKeyIfUndefined(
        diagnosticNode,
        this.container,
        this.partitionKey,
      );
      const err = {};
      if (!isItemResourceValid(body, err)) {
        throw err;
      }

      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.replace<T>({
        body,
        path,
        resourceType: ResourceType.item,
        resourceId: id,
        options,
        partitionKey: this.partitionKey,
        diagnosticNode,
      });
      return new ItemResponse(
        response.result,
        response.headers,
        response.code,
        response.substatus,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Delete the item.
   *
   * Any provided type, T, is not necessarily enforced by the SDK.
   * You may get more or less properties and it's up to your logic to enforce it.
   *
   * @param options - Additional options for the request
   */
  public async delete<T extends ItemDefinition = any>(
    options: RequestOptions = {},
  ): Promise<ItemResponse<T>> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      this.partitionKey = await setPartitionKeyIfUndefined(
        diagnosticNode,
        this.container,
        this.partitionKey,
      );

      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.delete<T>({
        path,
        resourceType: ResourceType.item,
        resourceId: id,
        options,
        partitionKey: this.partitionKey,
        diagnosticNode,
      });

      return new ItemResponse(
        response.result,
        response.headers,
        response.code,
        response.substatus,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }

  /**
   * Perform a JSONPatch on the item.
   *
   * Any provided type, T, is not necessarily enforced by the SDK.
   * You may get more or less properties and it's up to your logic to enforce it.
   *
   * @param options - Additional options for the request
   */
  public async patch<T extends ItemDefinition = any>(
    body: PatchRequestBody,
    options: RequestOptions = {},
  ): Promise<ItemResponse<T>> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      this.partitionKey = await setPartitionKeyIfUndefined(
        diagnosticNode,
        this.container,
        this.partitionKey,
      );
      const path = getPathFromLink(this.url);
      const id = getIdFromLink(this.url);

      const response = await this.clientContext.patch<T>({
        body,
        path,
        resourceType: ResourceType.item,
        resourceId: id,
        options,
        partitionKey: this.partitionKey,
        diagnosticNode,
      });

      return new ItemResponse(
        response.result,
        response.headers,
        response.code,
        response.substatus,
        this,
        getEmptyCosmosDiagnostics(),
      );
    }, this.clientContext);
  }
}
