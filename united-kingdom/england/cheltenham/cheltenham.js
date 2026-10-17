// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cheltenham","repository":"europe","path":"united-kingdom/england/cheltenham","depth":3,"parent":"united-kingdom/england","children":["bays-hill","overton-park","st-paul-s"]});
export const childModules = Object.freeze({"bays-hill":"./bays-hill/bays-hill.js","overton-park":"./overton-park/overton-park.js","st-paul-s":"./st-paul-s/st-paul-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
