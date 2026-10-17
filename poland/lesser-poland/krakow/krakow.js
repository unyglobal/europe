// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"krakow","repository":"europe","path":"poland/lesser-poland/krakow","depth":3,"parent":"poland/lesser-poland","children":["srodmiescie"]});
export const childModules = Object.freeze({"srodmiescie":"./srodmiescie/srodmiescie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
