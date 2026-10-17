// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sestiere-di-san-polo","repository":"europe","path":"italy/veneto/venice/sestiere-di-san-polo","depth":4,"parent":"italy/veneto/venice","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
