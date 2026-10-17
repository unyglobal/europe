// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-masnou","repository":"europe","path":"spain/catalonia/el-masnou","depth":3,"parent":"spain/catalonia","children":["ocata"]});
export const childModules = Object.freeze({"ocata":"./ocata/ocata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
