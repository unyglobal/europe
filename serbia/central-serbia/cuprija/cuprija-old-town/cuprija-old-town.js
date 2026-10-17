// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuprija-old-town","repository":"europe","path":"serbia/central-serbia/cuprija/cuprija-old-town","depth":4,"parent":"serbia/central-serbia/cuprija","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
