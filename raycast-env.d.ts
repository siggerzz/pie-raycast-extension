/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `get-pie-color-tokens` command */
  export type GetPieColorTokens = ExtensionPreferences & {}
  /** Preferences accessible in the `get-pie-releases-list` command */
  export type GetPieReleasesList = ExtensionPreferences & {}
  /** Preferences accessible in the `get-pie-releases-menubar` command */
  export type GetPieReleasesMenubar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `get-pie-color-tokens` command */
  export type GetPieColorTokens = {}
  /** Arguments passed to the `get-pie-releases-list` command */
  export type GetPieReleasesList = {
  /** component name */
  "component": string
}
  /** Arguments passed to the `get-pie-releases-menubar` command */
  export type GetPieReleasesMenubar = {}
}


