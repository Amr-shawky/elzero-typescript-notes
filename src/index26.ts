/**
 * Final discussion on the power of TypeScript interfaces.
 * - Interfaces support reopen, extension, and modular structure.
 * - Unlike type aliases, interfaces can be extended and reopened.
 * - DOM built-in types (like HTMLElement) use interfaces extensively.
 * - Interfaces are fundamental for scalable, maintainable TypeScript code.
 */

// Reopen an interface across different files or scopes
interface Settings3 {
  theme: boolean;
  font: string;
}

// Reopen interface to add more props
interface Settings3 {
  sidebar: boolean;
  external?: boolean;
}

// Using the merged interface
const userSettings1: Settings3 = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

// Type alias can't be reopened
// ❌ The following would throw an error:
// type Settings = { theme: boolean; font: string };
// type Settings = { sidebar: boolean }; // Error: Duplicate identifier

// Using DOM built-in interface
let el = document.getElementById("app") as HTMLElement;
el.hidden = false; // Works because `HTMLElement` has `hidden: boolean`

console.log(userSettings);
