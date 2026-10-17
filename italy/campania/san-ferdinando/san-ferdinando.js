// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-ferdinando","repository":"europe","path":"italy/campania/san-ferdinando","depth":3,"parent":"italy/campania","children":["pallonetto"]});
export const childModules = Object.freeze({"pallonetto":"./pallonetto/pallonetto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
