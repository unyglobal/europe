// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aosta-valley","repository":"europe","path":"italy/aosta-valley","depth":2,"parent":"italy","children":["aosta"]});
export const childModules = Object.freeze({"aosta":"./aosta/aosta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
