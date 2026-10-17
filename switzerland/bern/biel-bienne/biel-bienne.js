// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"biel-bienne","repository":"europe","path":"switzerland/bern/biel-bienne","depth":3,"parent":"switzerland/bern","children":["altstadt-vieille-ville","madretsch-nord","neustadt-nord-nouvelle-ville-nord","neustadt-sud-nouvelle-ville-sud","rebberg-vignoble"]});
export const childModules = Object.freeze({"altstadt-vieille-ville":"./altstadt-vieille-ville/altstadt-vieille-ville.js","madretsch-nord":"./madretsch-nord/madretsch-nord.js","neustadt-nord-nouvelle-ville-nord":"./neustadt-nord-nouvelle-ville-nord/neustadt-nord-nouvelle-ville-nord.js","neustadt-sud-nouvelle-ville-sud":"./neustadt-sud-nouvelle-ville-sud/neustadt-sud-nouvelle-ville-sud.js","rebberg-vignoble":"./rebberg-vignoble/rebberg-vignoble.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
