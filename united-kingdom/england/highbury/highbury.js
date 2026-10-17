// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"highbury","repository":"europe","path":"united-kingdom/england/highbury","depth":3,"parent":"united-kingdom/england","children":["highbury-east"]});
export const childModules = Object.freeze({"highbury-east":"./highbury-east/highbury-east.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
