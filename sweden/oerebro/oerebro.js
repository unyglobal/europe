// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oerebro","repository":"europe","path":"sweden/oerebro","depth":2,"parent":"sweden","children":["karlskoga","kumla","orebro"]});
export const childModules = Object.freeze({"karlskoga":"./karlskoga/karlskoga.js","kumla":"./kumla/kumla.js","orebro":"./orebro/orebro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
