// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"welling","repository":"europe","path":"united-kingdom/england/welling","depth":3,"parent":"united-kingdom/england","children":["falconwood-and-welling"]});
export const childModules = Object.freeze({"falconwood-and-welling":"./falconwood-and-welling/falconwood-and-welling.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
