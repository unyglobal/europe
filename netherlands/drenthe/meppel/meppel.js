// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"meppel","repository":"europe","path":"netherlands/drenthe/meppel","depth":3,"parent":"netherlands/drenthe","children":["koedijkslanden"]});
export const childModules = Object.freeze({"koedijkslanden":"./koedijkslanden/koedijkslanden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
