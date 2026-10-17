// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rayevskiy","repository":"europe","path":"russia/bashkortostan-republic/rayevskiy","depth":3,"parent":"russia/bashkortostan-republic","children":["al-sheyevo"]});
export const childModules = Object.freeze({"al-sheyevo":"./al-sheyevo/al-sheyevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
