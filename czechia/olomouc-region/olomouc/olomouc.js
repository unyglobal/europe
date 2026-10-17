// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olomouc","repository":"europe","path":"czechia/olomouc-region/olomouc","depth":3,"parent":"czechia/olomouc-region","children":["lazce"]});
export const childModules = Object.freeze({"lazce":"./lazce/lazce.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
