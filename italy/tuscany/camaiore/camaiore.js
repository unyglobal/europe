// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camaiore","repository":"europe","path":"italy/tuscany/camaiore","depth":3,"parent":"italy/tuscany","children":["montebello"]});
export const childModules = Object.freeze({"montebello":"./montebello/montebello.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
