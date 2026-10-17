// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bologoye","repository":"europe","path":"russia/tver-oblast/bologoye","depth":3,"parent":"russia/tver-oblast","children":["yelagino"]});
export const childModules = Object.freeze({"yelagino":"./yelagino/yelagino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
