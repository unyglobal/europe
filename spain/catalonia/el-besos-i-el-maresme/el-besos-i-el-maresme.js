// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-besos-i-el-maresme","repository":"europe","path":"spain/catalonia/el-besos-i-el-maresme","depth":3,"parent":"spain/catalonia","children":["forum"]});
export const childModules = Object.freeze({"forum":"./forum/forum.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
