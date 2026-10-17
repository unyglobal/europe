// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"worcester","repository":"europe","path":"united-kingdom/england/worcester","depth":3,"parent":"united-kingdom/england","children":["diglis","st-john-s"]});
export const childModules = Object.freeze({"diglis":"./diglis/diglis.js","st-john-s":"./st-john-s/st-john-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
