// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rawtenstall","repository":"europe","path":"united-kingdom/england/rawtenstall","depth":3,"parent":"united-kingdom/england","children":["spring-side"]});
export const childModules = Object.freeze({"spring-side":"./spring-side/spring-side.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
