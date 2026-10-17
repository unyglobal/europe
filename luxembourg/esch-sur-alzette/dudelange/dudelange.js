// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dudelange","repository":"europe","path":"luxembourg/esch-sur-alzette/dudelange","depth":3,"parent":"luxembourg/esch-sur-alzette","children":["italien","woulkeschdall"]});
export const childModules = Object.freeze({"italien":"./italien/italien.js","woulkeschdall":"./woulkeschdall/woulkeschdall.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
