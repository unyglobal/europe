// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pinner","repository":"europe","path":"united-kingdom/england/pinner","depth":3,"parent":"united-kingdom/england","children":["pinner-south"]});
export const childModules = Object.freeze({"pinner-south":"./pinner-south/pinner-south.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
