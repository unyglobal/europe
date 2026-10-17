// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akershus","repository":"europe","path":"norway/akershus","depth":2,"parent":"norway","children":["asker","lillestr-m"]});
export const childModules = Object.freeze({"asker":"./asker/asker.js","lillestr-m":"./lillestr-m/lillestr-m.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
