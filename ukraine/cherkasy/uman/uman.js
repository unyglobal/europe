// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uman","repository":"europe","path":"ukraine/cherkasy/uman","depth":3,"parent":"ukraine/cherkasy","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
