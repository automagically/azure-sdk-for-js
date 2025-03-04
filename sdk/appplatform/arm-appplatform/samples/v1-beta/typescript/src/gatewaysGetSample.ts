/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppPlatformManagementClient } from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get the Spring Cloud Gateway and its properties.
 *
 * @summary Get the Spring Cloud Gateway and its properties.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/Gateways_Get.json
 */
async function gatewaysGet() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const gatewayName = "default";
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.gateways.get(
    resourceGroupName,
    serviceName,
    gatewayName
  );
  console.log(result);
}

gatewaysGet().catch(console.error);
