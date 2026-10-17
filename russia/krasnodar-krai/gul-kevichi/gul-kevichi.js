// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gul-kevichi","repository":"europe","path":"russia/krasnodar-krai/gul-kevichi","depth":3,"parent":"russia/krasnodar-krai","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
