// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stary-bohumin","repository":"europe","path":"czechia/moravian-silesian-region/stary-bohumin","depth":3,"parent":"czechia/moravian-silesian-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
