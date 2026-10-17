// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saddleworth","repository":"europe","path":"united-kingdom/england/saddleworth","depth":3,"parent":"united-kingdom/england","children":["heathfields","lower-arthurs","shaws"]});
export const childModules = Object.freeze({"heathfields":"./heathfields/heathfields.js","lower-arthurs":"./lower-arthurs/lower-arthurs.js","shaws":"./shaws/shaws.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
