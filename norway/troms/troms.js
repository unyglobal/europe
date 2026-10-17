// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"troms","repository":"europe","path":"norway/troms","depth":2,"parent":"norway","children":["harstad","tromsdalen"]});
export const childModules = Object.freeze({"harstad":"./harstad/harstad.js","tromsdalen":"./tromsdalen/tromsdalen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
