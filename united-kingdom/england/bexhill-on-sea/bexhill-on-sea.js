// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bexhill-on-sea","repository":"europe","path":"united-kingdom/england/bexhill-on-sea","depth":3,"parent":"united-kingdom/england","children":["glenleigh-park","old-town"]});
export const childModules = Object.freeze({"glenleigh-park":"./glenleigh-park/glenleigh-park.js","old-town":"./old-town/old-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
