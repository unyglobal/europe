// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyor-moson-sopron","repository":"europe","path":"hungary/gyor-moson-sopron","depth":2,"parent":"hungary","children":["gyor","mosonmagyarovar","sopron"]});
export const childModules = Object.freeze({"gyor":"./gyor/gyor.js","mosonmagyarovar":"./mosonmagyarovar/mosonmagyarovar.js","sopron":"./sopron/sopron.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
