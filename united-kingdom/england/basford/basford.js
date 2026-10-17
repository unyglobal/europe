// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basford","repository":"europe","path":"united-kingdom/england/basford","depth":3,"parent":"united-kingdom/england","children":["bobbers-mill","whitemoor"]});
export const childModules = Object.freeze({"bobbers-mill":"./bobbers-mill/bobbers-mill.js","whitemoor":"./whitemoor/whitemoor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
