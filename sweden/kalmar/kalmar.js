// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalmar","repository":"europe","path":"sweden/kalmar","depth":2,"parent":"sweden","children":["oskarshamn","vastervik"]});
export const childModules = Object.freeze({"oskarshamn":"./oskarshamn/oskarshamn.js","vastervik":"./vastervik/vastervik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
