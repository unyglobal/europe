// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shoreham-by-sea","repository":"europe","path":"united-kingdom/england/shoreham-by-sea","depth":3,"parent":"united-kingdom/england","children":["kingston-by-sea","shoreham-beach"]});
export const childModules = Object.freeze({"kingston-by-sea":"./kingston-by-sea/kingston-by-sea.js","shoreham-beach":"./shoreham-beach/shoreham-beach.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
