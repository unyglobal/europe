// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dotzheim","repository":"europe","path":"germany/hesse/dotzheim","depth":3,"parent":"germany/hesse","children":["kohlheck","schelmengraben"]});
export const childModules = Object.freeze({"kohlheck":"./kohlheck/kohlheck.js","schelmengraben":"./schelmengraben/schelmengraben.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
