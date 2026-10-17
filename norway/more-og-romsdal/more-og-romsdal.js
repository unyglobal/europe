// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"more-og-romsdal","repository":"europe","path":"norway/more-og-romsdal","depth":2,"parent":"norway","children":["alesund","kristiansund","molde"]});
export const childModules = Object.freeze({"alesund":"./alesund/alesund.js","kristiansund":"./kristiansund/kristiansund.js","molde":"./molde/molde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
