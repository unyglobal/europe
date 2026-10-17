// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barnstaple","repository":"europe","path":"united-kingdom/england/barnstaple","depth":3,"parent":"united-kingdom/england","children":["derby","sticklepath"]});
export const childModules = Object.freeze({"derby":"./derby/derby.js","sticklepath":"./sticklepath/sticklepath.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
