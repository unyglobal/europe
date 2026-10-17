// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"apy","repository":"europe","path":"poland/podlasie/apy","depth":3,"parent":"poland/podlasie","children":["gozdziki","lesniki"]});
export const childModules = Object.freeze({"gozdziki":"./gozdziki/gozdziki.js","lesniki":"./lesniki/lesniki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
