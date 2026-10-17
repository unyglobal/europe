// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elland","repository":"europe","path":"united-kingdom/england/elland","depth":3,"parent":"united-kingdom/england","children":["heathfield","rosemount"]});
export const childModules = Object.freeze({"heathfield":"./heathfield/heathfield.js","rosemount":"./rosemount/rosemount.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
