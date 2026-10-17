// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porto-de-mos","repository":"europe","path":"portugal/faro/porto-de-mos","depth":3,"parent":"portugal/faro","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
