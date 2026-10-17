// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zagreb","repository":"europe","path":"croatia/zagreb","depth":2,"parent":"croatia","children":["centar","sesvete"]});
export const childModules = Object.freeze({"centar":"./centar/centar.js","sesvete":"./sesvete/sesvete.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
