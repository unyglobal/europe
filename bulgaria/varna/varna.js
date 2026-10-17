// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"varna","repository":"europe","path":"bulgaria/varna","depth":2,"parent":"bulgaria","children":["asparuhovo"]});
export const childModules = Object.freeze({"asparuhovo":"./asparuhovo/asparuhovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
