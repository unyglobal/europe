// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hornchurch","repository":"europe","path":"united-kingdom/england/hornchurch","depth":3,"parent":"united-kingdom/england","children":["hacton","st-andrew-s"]});
export const childModules = Object.freeze({"hacton":"./hacton/hacton.js","st-andrew-s":"./st-andrew-s/st-andrew-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
