/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The operation to delete the restore point collection. This operation will also delete all the contained restore points.
 *
 * @summary The operation to delete the restore point collection. This operation will also delete all the contained restore points.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/RestorePointCollections_Delete_MaximumSet_Gen.json
 */
async function restorePointCollectionsDeleteMaximumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const restorePointCollectionName = "aaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.restorePointCollections.beginDeleteAndWait(
    resourceGroupName,
    restorePointCollectionName
  );
  console.log(result);
}

restorePointCollectionsDeleteMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to The operation to delete the restore point collection. This operation will also delete all the contained restore points.
 *
 * @summary The operation to delete the restore point collection. This operation will also delete all the contained restore points.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/RestorePointCollections_Delete_MinimumSet_Gen.json
 */
async function restorePointCollectionsDeleteMinimumSetGen() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "rgcompute";
  const restorePointCollectionName = "aaaaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.restorePointCollections.beginDeleteAndWait(
    resourceGroupName,
    restorePointCollectionName
  );
  console.log(result);
}

restorePointCollectionsDeleteMinimumSetGen().catch(console.error);
