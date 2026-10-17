// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belluno","repository":"europe","path":"italy/veneto/belluno","depth":3,"parent":"italy/veneto","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
