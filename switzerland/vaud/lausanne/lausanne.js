// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lausanne","repository":"europe","path":"switzerland/vaud/lausanne","depth":3,"parent":"switzerland/vaud","children":["centre-ville","montchoisi"]});
export const childModules = Object.freeze({"centre-ville":"./centre-ville/centre-ville.js","montchoisi":"./montchoisi/montchoisi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
