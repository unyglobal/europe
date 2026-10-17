// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basel","repository":"europe","path":"switzerland/basel-city/basel","depth":3,"parent":"switzerland/basel-city","children":["am-ring","gotthelf","iselin"]});
export const childModules = Object.freeze({"am-ring":"./am-ring/am-ring.js","gotthelf":"./gotthelf/gotthelf.js","iselin":"./iselin/iselin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
