// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ireland","repository":"europe","path":"ireland","depth":1,"parent":"","children":["connacht","leinster","munster","ulster"]});
export const childModules = Object.freeze({"connacht":"./connacht/connacht.js","leinster":"./leinster/leinster.js","munster":"./munster/munster.js","ulster":"./ulster/ulster.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
