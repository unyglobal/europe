// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caerphilly","repository":"europe","path":"united-kingdom/wales/caerphilly","depth":3,"parent":"united-kingdom/wales","children":["castle-park","denscombe","lansbury-park","st-martins"]});
export const childModules = Object.freeze({"castle-park":"./castle-park/castle-park.js","denscombe":"./denscombe/denscombe.js","lansbury-park":"./lansbury-park/lansbury-park.js","st-martins":"./st-martins/st-martins.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
