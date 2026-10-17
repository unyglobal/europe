// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urban-municipality-of-novo-mesto","repository":"europe","path":"slovenia/urban-municipality-of-novo-mesto","depth":2,"parent":"slovenia","children":["novo-mesto"]});
export const childModules = Object.freeze({"novo-mesto":"./novo-mesto/novo-mesto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
