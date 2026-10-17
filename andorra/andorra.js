// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"andorra","repository":"europe","path":"andorra","depth":1,"parent":"","children":["andorra-la-vella","escaldes-engordany"]});
export const childModules = Object.freeze({"andorra-la-vella":"./andorra-la-vella/andorra-la-vella.js","escaldes-engordany":"./escaldes-engordany/escaldes-engordany.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
