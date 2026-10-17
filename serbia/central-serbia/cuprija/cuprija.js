// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuprija","repository":"europe","path":"serbia/central-serbia/cuprija","depth":3,"parent":"serbia/central-serbia","children":["cuprija-old-town"]});
export const childModules = Object.freeze({"cuprija-old-town":"./cuprija-old-town/cuprija-old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
