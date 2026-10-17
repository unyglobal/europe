// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-vendrell","repository":"europe","path":"spain/catalonia/el-vendrell","depth":3,"parent":"spain/catalonia","children":["el-pelag","el-puig"]});
export const childModules = Object.freeze({"el-pelag":"./el-pelag/el-pelag.js","el-puig":"./el-puig/el-puig.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
