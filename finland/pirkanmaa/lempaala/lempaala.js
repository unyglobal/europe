// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lempaala","repository":"europe","path":"finland/pirkanmaa/lempaala","depth":3,"parent":"finland/pirkanmaa","children":["halkola","ryynikka"]});
export const childModules = Object.freeze({"halkola":"./halkola/halkola.js","ryynikka":"./ryynikka/ryynikka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
