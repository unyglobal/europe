// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"droitwich","repository":"europe","path":"united-kingdom/england/droitwich","depth":3,"parent":"united-kingdom/england","children":["hill-end","netherwich","newtown","the-vines","westacre"]});
export const childModules = Object.freeze({"hill-end":"./hill-end/hill-end.js","netherwich":"./netherwich/netherwich.js","newtown":"./newtown/newtown.js","the-vines":"./the-vines/the-vines.js","westacre":"./westacre/westacre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
