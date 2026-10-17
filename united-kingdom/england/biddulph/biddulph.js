// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"biddulph","repository":"europe","path":"united-kingdom/england/biddulph","depth":3,"parent":"united-kingdom/england","children":["braddocks-hay","gillow-heath","knowle-style"]});
export const childModules = Object.freeze({"braddocks-hay":"./braddocks-hay/braddocks-hay.js","gillow-heath":"./gillow-heath/gillow-heath.js","knowle-style":"./knowle-style/knowle-style.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
