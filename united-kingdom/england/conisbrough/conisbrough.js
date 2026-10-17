// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"conisbrough","repository":"europe","path":"united-kingdom/england/conisbrough","depth":3,"parent":"united-kingdom/england","children":["conanby"]});
export const childModules = Object.freeze({"conanby":"./conanby/conanby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
