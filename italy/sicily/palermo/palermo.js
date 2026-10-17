// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palermo","repository":"europe","path":"italy/sicily/palermo","depth":3,"parent":"italy/sicily","children":["ballaro","kalsa","palazzo-reale-monte-di-pieta","tribunali-castellammare"]});
export const childModules = Object.freeze({"ballaro":"./ballaro/ballaro.js","kalsa":"./kalsa/kalsa.js","palazzo-reale-monte-di-pieta":"./palazzo-reale-monte-di-pieta/palazzo-reale-monte-di-pieta.js","tribunali-castellammare":"./tribunali-castellammare/tribunali-castellammare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
