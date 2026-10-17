// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bexley","repository":"europe","path":"united-kingdom/england/bexley","depth":3,"parent":"united-kingdom/england","children":["old-bexley","st-mary-s"]});
export const childModules = Object.freeze({"old-bexley":"./old-bexley/old-bexley.js","st-mary-s":"./st-mary-s/st-mary-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
