// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stirling","repository":"europe","path":"united-kingdom/scotland/stirling","depth":3,"parent":"united-kingdom/scotland","children":["riverside","shore"]});
export const childModules = Object.freeze({"riverside":"./riverside/riverside.js","shore":"./shore/shore.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
