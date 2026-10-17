// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blagoevgrad","repository":"europe","path":"bulgaria/blagoevgrad","depth":2,"parent":"bulgaria","children":["gotse-delchev","petrich","sandanski"]});
export const childModules = Object.freeze({"gotse-delchev":"./gotse-delchev/gotse-delchev.js","petrich":"./petrich/petrich.js","sandanski":"./sandanski/sandanski.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
