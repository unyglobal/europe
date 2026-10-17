// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"formby","repository":"europe","path":"united-kingdom/england/formby","depth":3,"parent":"united-kingdom/england","children":["freshfield"]});
export const childModules = Object.freeze({"freshfield":"./freshfield/freshfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
