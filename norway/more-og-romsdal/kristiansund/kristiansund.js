// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kristiansund","repository":"europe","path":"norway/more-og-romsdal/kristiansund","depth":3,"parent":"norway/more-og-romsdal","children":["innlandet","nordlandet"]});
export const childModules = Object.freeze({"innlandet":"./innlandet/innlandet.js","nordlandet":"./nordlandet/nordlandet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
