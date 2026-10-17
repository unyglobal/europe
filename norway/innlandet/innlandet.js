// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"innlandet","repository":"europe","path":"norway/innlandet","depth":2,"parent":"norway","children":["gj-vik","hamar","lillehammer"]});
export const childModules = Object.freeze({"gj-vik":"./gj-vik/gj-vik.js","hamar":"./hamar/hamar.js","lillehammer":"./lillehammer/lillehammer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
