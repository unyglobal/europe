// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newbury","repository":"europe","path":"united-kingdom/england/newbury","depth":3,"parent":"united-kingdom/england","children":["east-fields","newbury-city","speenhamland","west-fields"]});
export const childModules = Object.freeze({"east-fields":"./east-fields/east-fields.js","newbury-city":"./newbury-city/newbury-city.js","speenhamland":"./speenhamland/speenhamland.js","west-fields":"./west-fields/west-fields.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
