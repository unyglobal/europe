// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barajas-de-madrid","repository":"europe","path":"spain/madrid/barajas-de-madrid","depth":3,"parent":"spain/madrid","children":["casco-historico-de-barajas"]});
export const childModules = Object.freeze({"casco-historico-de-barajas":"./casco-historico-de-barajas/casco-historico-de-barajas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
