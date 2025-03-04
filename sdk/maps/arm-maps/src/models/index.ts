/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The SKU of the Maps Account. */
export interface Sku {
  /** The name of the SKU, in standard format (such as S0). */
  name: Name;
  /**
   * Gets the sku tier. This is based on the SKU name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tier?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Additional Map account properties */
export interface MapsAccountProperties {
  /**
   * A unique identifier for the maps account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly uniqueId?: string;
  /** Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage. */
  disableLocalAuth?: boolean;
  /**
   * the state of the provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Parameters used to update an existing Maps Account. */
export interface MapsAccountUpdateParameters {
  /** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
  tags?: { [propertyName: string]: string };
  /** Get or Set Kind property. */
  kind?: Kind;
  /** The SKU of this account. */
  sku?: Sku;
  /**
   * A unique identifier for the maps account
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly uniqueId?: string;
  /** Allows toggle functionality on Azure Policy to disable Azure Maps local authentication support. This will disable Shared Keys authentication from any usage. */
  disableLocalAuth?: boolean;
  /**
   * the state of the provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
}

/** A list of Maps Accounts. */
export interface MapsAccounts {
  /**
   * a Maps Account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: MapsAccount[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** The set of keys which can be used to access the Maps REST APIs. Two keys are provided for key rotation without interruption. */
export interface MapsAccountKeys {
  /**
   * The last updated date and time of the primary key.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly primaryKeyLastUpdated?: string;
  /**
   * The primary key for accessing the Maps REST APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly primaryKey?: string;
  /**
   * The secondary key for accessing the Maps REST APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly secondaryKey?: string;
  /**
   * The last updated date and time of the secondary key.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly secondaryKeyLastUpdated?: string;
}

/** Whether the operation refers to the primary or secondary key. */
export interface MapsKeySpecification {
  /** Whether the operation refers to the primary or secondary key. */
  keyType: KeyType;
}

/** The set of operations available for Maps. */
export interface MapsOperations {
  /**
   * An operation available for Maps.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: OperationDetail[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Operation detail payload */
export interface OperationDetail {
  /** Name of the operation */
  name?: string;
  /** Indicates whether the operation is a data action */
  isDataAction?: boolean;
  /** Display of the operation */
  display?: OperationDisplay;
  /** Origin of the operation */
  origin?: string;
  /** One property of operation, include metric specifications. */
  serviceSpecification?: ServiceSpecification;
}

/** Operation display payload */
export interface OperationDisplay {
  /** Resource provider of the operation */
  provider?: string;
  /** Resource of the operation */
  resource?: string;
  /** Localized friendly name for the operation */
  operation?: string;
  /** Localized friendly description for the operation */
  description?: string;
}

/** One property of operation, include metric specifications. */
export interface ServiceSpecification {
  /** Metric specifications of operation. */
  metricSpecifications?: MetricSpecification[];
}

/** Metric specification of operation. */
export interface MetricSpecification {
  /** Name of metric specification. */
  name?: string;
  /** Display name of metric specification. */
  displayName?: string;
  /** Display description of metric specification. */
  displayDescription?: string;
  /** Unit could be Count. */
  unit?: string;
  /** Dimensions of map account. */
  dimensions?: Dimension[];
  /** Aggregation type could be Average. */
  aggregationType?: string;
  /** The property to decide fill gap with zero or not. */
  fillGapWithZero?: boolean;
  /** The category this metric specification belong to, could be Capacity. */
  category?: string;
  /** Account Resource Id. */
  resourceIdDimensionNameOverride?: string;
}

/** Dimension of map account, for example API Category, Api Name, Result Type, and Response Code. */
export interface Dimension {
  /** Display name of dimension. */
  name?: string;
  /** Display name of dimension. */
  displayName?: string;
  /** Internal name of the dimension. */
  internalName?: string;
  /** Internal metric name of the dimension. */
  internalMetricName?: string;
  /** Source Mdm Namespace of the dimension. */
  sourceMdmNamespace?: string;
  /** Flag to indicate exporting to Azure Monitor. */
  toBeExportedToShoebox?: boolean;
}

/** A list of Creator resources. */
export interface CreatorList {
  /**
   * a Creator account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Creator[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Creator resource properties */
export interface CreatorProperties {
  /**
   * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** The storage units to be allocated. Integer values from 1 to 100, inclusive. */
  storageUnits: number;
}

/** Parameters used to update an existing Creator resource. */
export interface CreatorUpdateParameters {
  /** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. */
  tags?: { [propertyName: string]: string };
  /**
   * The state of the resource provisioning, terminal states: Succeeded, Failed, Canceled
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** The storage units to be allocated. Integer values from 1 to 100, inclusive. */
  storageUnits?: number;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export type TrackedResource = Resource & {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
};

/** An Azure resource which represents access to a suite of Maps REST APIs. */
export type MapsAccount = TrackedResource & {
  /** The SKU of this account. */
  sku: Sku;
  /** Get or Set Kind property. */
  kind?: Kind;
  /**
   * The system meta data relating to this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The map account properties. */
  properties?: MapsAccountProperties;
};

/** An Azure resource which represents Maps Creator product and provides ability to manage private location data. */
export type Creator = TrackedResource & {
  /** The Creator resource properties. */
  properties: CreatorProperties;
};

/** Known values of {@link Name} that the service accepts. */
export enum KnownName {
  S0 = "S0",
  S1 = "S1",
  G2 = "G2"
}

/**
 * Defines values for Name. \
 * {@link KnownName} can be used interchangeably with Name,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **S0** \
 * **S1** \
 * **G2**
 */
export type Name = string;

/** Known values of {@link Kind} that the service accepts. */
export enum KnownKind {
  Gen1 = "Gen1",
  Gen2 = "Gen2"
}

/**
 * Defines values for Kind. \
 * {@link KnownKind} can be used interchangeably with Kind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Gen1** \
 * **Gen2**
 */
export type Kind = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link KeyType} that the service accepts. */
export enum KnownKeyType {
  Primary = "primary",
  Secondary = "secondary"
}

/**
 * Defines values for KeyType. \
 * {@link KnownKeyType} can be used interchangeably with KeyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **primary** \
 * **secondary**
 */
export type KeyType = string;

/** Optional parameters. */
export interface AccountsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type AccountsCreateOrUpdateResponse = MapsAccount;

/** Optional parameters. */
export interface AccountsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type AccountsUpdateResponse = MapsAccount;

/** Optional parameters. */
export interface AccountsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AccountsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AccountsGetResponse = MapsAccount;

/** Optional parameters. */
export interface AccountsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AccountsListByResourceGroupResponse = MapsAccounts;

/** Optional parameters. */
export interface AccountsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type AccountsListBySubscriptionResponse = MapsAccounts;

/** Optional parameters. */
export interface AccountsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type AccountsListKeysResponse = MapsAccountKeys;

/** Optional parameters. */
export interface AccountsRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type AccountsRegenerateKeysResponse = MapsAccountKeys;

/** Optional parameters. */
export interface AccountsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type AccountsListByResourceGroupNextResponse = MapsAccounts;

/** Optional parameters. */
export interface AccountsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type AccountsListBySubscriptionNextResponse = MapsAccounts;

/** Optional parameters. */
export interface MapsListOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperations operation. */
export type MapsListOperationsResponse = MapsOperations;

/** Optional parameters. */
export interface MapsListSubscriptionOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listSubscriptionOperations operation. */
export type MapsListSubscriptionOperationsResponse = MapsOperations;

/** Optional parameters. */
export interface MapsListOperationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperationsNext operation. */
export type MapsListOperationsNextResponse = MapsOperations;

/** Optional parameters. */
export interface MapsListSubscriptionOperationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listSubscriptionOperationsNext operation. */
export type MapsListSubscriptionOperationsNextResponse = MapsOperations;

/** Optional parameters. */
export interface CreatorsListByAccountOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByAccount operation. */
export type CreatorsListByAccountResponse = CreatorList;

/** Optional parameters. */
export interface CreatorsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type CreatorsCreateOrUpdateResponse = Creator;

/** Optional parameters. */
export interface CreatorsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type CreatorsUpdateResponse = Creator;

/** Optional parameters. */
export interface CreatorsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreatorsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type CreatorsGetResponse = Creator;

/** Optional parameters. */
export interface CreatorsListByAccountNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByAccountNext operation. */
export type CreatorsListByAccountNextResponse = CreatorList;

/** Optional parameters. */
export interface AzureMapsManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
