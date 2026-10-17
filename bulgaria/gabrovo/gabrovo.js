// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gabrovo","repository":"europe","path":"bulgaria/gabrovo","depth":2,"parent":"bulgaria","children":["sevlievo"]});
export const childModules = Object.freeze({"sevlievo":"./sevlievo/sevlievo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
