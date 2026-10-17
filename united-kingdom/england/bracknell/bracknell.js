// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bracknell","repository":"europe","path":"united-kingdom/england/bracknell","depth":3,"parent":"united-kingdom/england","children":["skimpedhill","wildridings"]});
export const childModules = Object.freeze({"skimpedhill":"./skimpedhill/skimpedhill.js","wildridings":"./wildridings/wildridings.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
