// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paijat-hame","repository":"europe","path":"finland/paijat-hame","depth":2,"parent":"finland","children":["heinola","hollola","lahti","orimattila"]});
export const childModules = Object.freeze({"heinola":"./heinola/heinola.js","hollola":"./hollola/hollola.js","lahti":"./lahti/lahti.js","orimattila":"./orimattila/orimattila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
