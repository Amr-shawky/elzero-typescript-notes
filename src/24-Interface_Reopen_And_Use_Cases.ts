/**
 * Demonstrates how to reopen a TypeScript interface to add new properties.
 * - Useful for modular design across multiple files/pages.
 * - Allows optional and readonly properties.
 * - Note: This is not inheritance (extends), it's merging declarations.
 */

// Initial Settings in Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Reopen Settings in Articles Page
interface Settings {
  sidebar: boolean;
}

// Reopen Settings in Contact Page
interface Settings {
  external?: boolean;
}

// User settings object
let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
};

console.log(userSettings);
