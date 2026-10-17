// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sherstyanka","repository":"europe","path":"ukraine/chernihiv-oblast/novozavodskyi/sherstyanka","depth":4,"parent":"ukraine/chernihiv-oblast/novozavodskyi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
