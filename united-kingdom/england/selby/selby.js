// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"selby","repository":"europe","path":"united-kingdom/england/selby","depth":3,"parent":"united-kingdom/england","children":["westfield"]});
export const childModules = Object.freeze({"westfield":"./westfield/westfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
