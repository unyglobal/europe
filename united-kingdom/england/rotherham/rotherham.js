// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rotherham","repository":"europe","path":"united-kingdom/england/rotherham","depth":3,"parent":"united-kingdom/england","children":["clifton","new-york","northfield","st-ann-s","thorn-hill"]});
export const childModules = Object.freeze({"clifton":"./clifton/clifton.js","new-york":"./new-york/new-york.js","northfield":"./northfield/northfield.js","st-ann-s":"./st-ann-s/st-ann-s.js","thorn-hill":"./thorn-hill/thorn-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
