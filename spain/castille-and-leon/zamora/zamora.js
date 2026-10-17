// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zamora","repository":"europe","path":"spain/castille-and-leon/zamora","depth":3,"parent":"spain/castille-and-leon","children":["san-lazaro"]});
export const childModules = Object.freeze({"san-lazaro":"./san-lazaro/san-lazaro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
