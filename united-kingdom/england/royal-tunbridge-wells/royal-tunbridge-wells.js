// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"royal-tunbridge-wells","repository":"europe","path":"united-kingdom/england/royal-tunbridge-wells","depth":3,"parent":"united-kingdom/england","children":["st-john-s"]});
export const childModules = Object.freeze({"st-john-s":"./st-john-s/st-john-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
