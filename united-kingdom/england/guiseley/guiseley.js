// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guiseley","repository":"europe","path":"united-kingdom/england/guiseley","depth":3,"parent":"united-kingdom/england","children":["kelcliffe"]});
export const childModules = Object.freeze({"kelcliffe":"./kelcliffe/kelcliffe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
