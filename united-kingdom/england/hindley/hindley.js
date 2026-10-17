// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hindley","repository":"europe","path":"united-kingdom/england/hindley","depth":3,"parent":"united-kingdom/england","children":["chapel-fields"]});
export const childModules = Object.freeze({"chapel-fields":"./chapel-fields/chapel-fields.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
