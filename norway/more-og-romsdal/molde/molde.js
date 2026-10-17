// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"molde","repository":"europe","path":"norway/more-og-romsdal/molde","depth":3,"parent":"norway/more-og-romsdal","children":["kringsja","r-ysan"]});
export const childModules = Object.freeze({"kringsja":"./kringsja/kringsja.js","r-ysan":"./r-ysan/r-ysan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
