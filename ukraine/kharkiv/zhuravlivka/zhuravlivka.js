// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhuravlivka","repository":"europe","path":"ukraine/kharkiv/zhuravlivka","depth":3,"parent":"ukraine/kharkiv","children":["sokol-nyky"]});
export const childModules = Object.freeze({"sokol-nyky":"./sokol-nyky/sokol-nyky.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
