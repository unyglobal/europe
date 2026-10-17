// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"golborne","repository":"europe","path":"united-kingdom/england/golborne","depth":3,"parent":"united-kingdom/england","children":["bank-heath"]});
export const childModules = Object.freeze({"bank-heath":"./bank-heath/bank-heath.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
