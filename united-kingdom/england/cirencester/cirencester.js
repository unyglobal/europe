// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cirencester","repository":"europe","path":"united-kingdom/england/cirencester","depth":3,"parent":"united-kingdom/england","children":["bowling-green"]});
export const childModules = Object.freeze({"bowling-green":"./bowling-green/bowling-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
