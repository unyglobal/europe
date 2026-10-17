// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bielany","repository":"europe","path":"poland/mazovia/bielany","depth":3,"parent":"poland/mazovia","children":["huta","wrzeciono"]});
export const childModules = Object.freeze({"huta":"./huta/huta.js","wrzeciono":"./wrzeciono/wrzeciono.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
