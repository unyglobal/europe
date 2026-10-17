// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hebburn","repository":"europe","path":"united-kingdom/england/hebburn","depth":3,"parent":"united-kingdom/england","children":["hebburn-new-town"]});
export const childModules = Object.freeze({"hebburn-new-town":"./hebburn-new-town/hebburn-new-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
