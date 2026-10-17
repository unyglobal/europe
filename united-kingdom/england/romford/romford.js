// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"romford","repository":"europe","path":"united-kingdom/england/romford","depth":3,"parent":"united-kingdom/england","children":["romford-town"]});
export const childModules = Object.freeze({"romford-town":"./romford-town/romford-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
