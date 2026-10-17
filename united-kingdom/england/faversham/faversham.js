// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"faversham","repository":"europe","path":"united-kingdom/england/faversham","depth":3,"parent":"united-kingdom/england","children":["davington","preston"]});
export const childModules = Object.freeze({"davington":"./davington/davington.js","preston":"./preston/preston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
