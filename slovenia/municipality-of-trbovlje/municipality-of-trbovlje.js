// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"municipality-of-trbovlje","repository":"europe","path":"slovenia/municipality-of-trbovlje","depth":2,"parent":"slovenia","children":["trbovlje"]});
export const childModules = Object.freeze({"trbovlje":"./trbovlje/trbovlje.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
