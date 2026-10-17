// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hereford","repository":"europe","path":"united-kingdom/england/hereford","depth":3,"parent":"united-kingdom/england","children":["bartonsham","blackmarstone","moorfields","portfields","ryelands"]});
export const childModules = Object.freeze({"bartonsham":"./bartonsham/bartonsham.js","blackmarstone":"./blackmarstone/blackmarstone.js","moorfields":"./moorfields/moorfields.js","portfields":"./portfields/portfields.js","ryelands":"./ryelands/ryelands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
