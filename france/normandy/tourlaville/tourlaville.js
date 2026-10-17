// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tourlaville","repository":"europe","path":"france/normandy/tourlaville","depth":3,"parent":"france/normandy","children":["la-mare-de-tourlaville","pont-marais"]});
export const childModules = Object.freeze({"la-mare-de-tourlaville":"./la-mare-de-tourlaville/la-mare-de-tourlaville.js","pont-marais":"./pont-marais/pont-marais.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
