// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stafford","repository":"europe","path":"united-kingdom/england/stafford","depth":3,"parent":"united-kingdom/england","children":["broadeye","castletown","forebridge"]});
export const childModules = Object.freeze({"broadeye":"./broadeye/broadeye.js","castletown":"./castletown/castletown.js","forebridge":"./forebridge/forebridge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
