// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pskov-oblast","repository":"europe","path":"russia/pskov-oblast","depth":2,"parent":"russia","children":["nevel","ostrov","pskov","velikiye-luki"]});
export const childModules = Object.freeze({"nevel":"./nevel/nevel.js","ostrov":"./ostrov/ostrov.js","pskov":"./pskov/pskov.js","velikiye-luki":"./velikiye-luki/velikiye-luki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
