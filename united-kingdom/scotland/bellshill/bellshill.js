// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bellshill","repository":"europe","path":"united-kingdom/scotland/bellshill","depth":3,"parent":"united-kingdom/scotland","children":["milnwood"]});
export const childModules = Object.freeze({"milnwood":"./milnwood/milnwood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
