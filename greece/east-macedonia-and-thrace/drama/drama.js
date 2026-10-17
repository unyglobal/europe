// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"drama","repository":"europe","path":"greece/east-macedonia-and-thrace/drama","depth":3,"parent":"greece/east-macedonia-and-thrace","children":["ambelokipoi"]});
export const childModules = Object.freeze({"ambelokipoi":"./ambelokipoi/ambelokipoi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
