// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"koper","repository":"europe","path":"slovenia/urban-municipality-of-koper/koper","depth":3,"parent":"slovenia/urban-municipality-of-koper","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
