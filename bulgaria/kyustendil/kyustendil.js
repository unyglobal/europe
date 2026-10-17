// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kyustendil","repository":"europe","path":"bulgaria/kyustendil","depth":2,"parent":"bulgaria","children":["dupnitsa"]});
export const childModules = Object.freeze({"dupnitsa":"./dupnitsa/dupnitsa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
