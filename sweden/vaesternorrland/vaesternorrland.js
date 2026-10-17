// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vaesternorrland","repository":"europe","path":"sweden/vaesternorrland","depth":2,"parent":"sweden","children":["harnosand","ornskoldsvik","sundsvall"]});
export const childModules = Object.freeze({"harnosand":"./harnosand/harnosand.js","ornskoldsvik":"./ornskoldsvik/ornskoldsvik.js","sundsvall":"./sundsvall/sundsvall.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
