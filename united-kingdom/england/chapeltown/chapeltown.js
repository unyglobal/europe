// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chapeltown","repository":"europe","path":"united-kingdom/england/chapeltown","depth":3,"parent":"united-kingdom/england","children":["lane-end"]});
export const childModules = Object.freeze({"lane-end":"./lane-end/lane-end.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
