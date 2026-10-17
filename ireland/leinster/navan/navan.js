// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"navan","repository":"europe","path":"ireland/leinster/navan","depth":3,"parent":"ireland/leinster","children":["abbeyland"]});
export const childModules = Object.freeze({"abbeyland":"./abbeyland/abbeyland.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
