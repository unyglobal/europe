// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"telford","repository":"europe","path":"united-kingdom/england/telford","depth":3,"parent":"united-kingdom/england","children":["town-centre"]});
export const childModules = Object.freeze({"town-centre":"./town-centre/town-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
