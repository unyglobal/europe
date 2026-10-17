// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shipley","repository":"europe","path":"united-kingdom/england/shipley","depth":3,"parent":"united-kingdom/england","children":["low-ash","windhill","wood-end","wrose"]});
export const childModules = Object.freeze({"low-ash":"./low-ash/low-ash.js","windhill":"./windhill/windhill.js","wood-end":"./wood-end/wood-end.js","wrose":"./wrose/wrose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
