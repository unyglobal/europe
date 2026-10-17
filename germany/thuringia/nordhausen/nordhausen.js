// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nordhausen","repository":"europe","path":"germany/thuringia/nordhausen","depth":3,"parent":"germany/thuringia","children":["frauenberg","petersberg"]});
export const childModules = Object.freeze({"frauenberg":"./frauenberg/frauenberg.js","petersberg":"./petersberg/petersberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
