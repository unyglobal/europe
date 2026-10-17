// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"surbiton","repository":"europe","path":"united-kingdom/england/surbiton","depth":3,"parent":"united-kingdom/england","children":["seething-wells","st-mark-s"]});
export const childModules = Object.freeze({"seething-wells":"./seething-wells/seething-wells.js","st-mark-s":"./st-mark-s/st-mark-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
