// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salford","repository":"europe","path":"united-kingdom/england/salford","depth":3,"parent":"united-kingdom/england","children":["brindle-heath","new-windsor","wallness"]});
export const childModules = Object.freeze({"brindle-heath":"./brindle-heath/brindle-heath.js","new-windsor":"./new-windsor/new-windsor.js","wallness":"./wallness/wallness.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
