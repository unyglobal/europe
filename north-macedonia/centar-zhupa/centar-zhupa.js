// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centar-zhupa","repository":"europe","path":"north-macedonia/centar-zhupa","depth":2,"parent":"north-macedonia","children":["centar-zupa"]});
export const childModules = Object.freeze({"centar-zupa":"./centar-zupa/centar-zupa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
