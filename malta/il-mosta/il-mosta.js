// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"il-mosta","repository":"europe","path":"malta/il-mosta","depth":2,"parent":"malta","children":["mosta"]});
export const childModules = Object.freeze({"mosta":"./mosta/mosta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
