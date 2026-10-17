// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oleksiyivka","repository":"europe","path":"ukraine/kharkiv/oleksiyivka","depth":3,"parent":"ukraine/kharkiv","children":["zelene"]});
export const childModules = Object.freeze({"zelene":"./zelene/zelene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
