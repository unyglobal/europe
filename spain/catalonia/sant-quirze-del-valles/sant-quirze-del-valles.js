// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sant-quirze-del-valles","repository":"europe","path":"spain/catalonia/sant-quirze-del-valles","depth":3,"parent":"spain/catalonia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
