// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @file Testing the ts-apisurface-standardized-verbs rule.
 *
 */

import { createRuleTester } from "../ruleTester.js";
import rule from "../../src/rules/ts-apisurface-standardized-verbs.js";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = createRuleTester();

ruleTester.run("ts-apifurface-standardized-verbs", rule, {
  valid: [
    // single method
    {
      code: "class ExampleClient { createItem(): void {}; };",
    },
    // mutliple methods
    {
      code: `
        class ExampleClient {
          createItem(): void {};
          upsertItem(): void {};
          setItem(): void {};
          updateItem(): void {};
          replaceItem(): void {};
          appendItem(): void {};
          addItem(): void {};
          getItem(): void {};
          listItems(): void {};
          itemExists(): void {};
          deleteItem(): void {};
          removeItem(): void {};
      };`,
    },
    // private
    {
      code: "class ExampleClient { private makeItem(): void {}; };",
    },
    // not client
    {
      code: "class Example { makeItem(): void {}; };",
    },
  ],
  invalid: [
    // single error
    {
      code: "class ExampleClient { makeItem(): void {}; };",
      errors: [
        {
          message:
            "method makeItem uses the banned prefix make, use one of the approved prefixes instead",
        },
      ],
    },
    // mutliple errors
    {
      code: "class ExampleClient { makeItem(): void {}; eraseItem(): void {}; };",
      errors: [
        {
          message:
            "method makeItem uses the banned prefix make, use one of the approved prefixes instead",
        },
        {
          message:
            "method eraseItem uses the banned prefix erase, use one of the approved prefixes instead",
        },
      ],
    },
  ],
});
