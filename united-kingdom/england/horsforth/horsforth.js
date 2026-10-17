// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"horsforth","repository":"europe","path":"united-kingdom/england/horsforth","depth":3,"parent":"united-kingdom/england","children":["troy"]});
export const childModules = Object.freeze({"troy":"./troy/troy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
