// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stara-zagora","repository":"europe","path":"bulgaria/stara-zagora","depth":2,"parent":"bulgaria","children":["chirpan","kazanlak"]});
export const childModules = Object.freeze({"chirpan":"./chirpan/chirpan.js","kazanlak":"./kazanlak/kazanlak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
