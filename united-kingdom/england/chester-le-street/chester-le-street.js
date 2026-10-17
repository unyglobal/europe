// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chester-le-street","repository":"europe","path":"united-kingdom/england/chester-le-street","depth":3,"parent":"united-kingdom/england","children":["canada"]});
export const childModules = Object.freeze({"canada":"./canada/canada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
