// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lahti","repository":"europe","path":"finland/paijat-hame/lahti","depth":3,"parent":"finland/paijat-hame","children":["kariniemi","kartano","paavola"]});
export const childModules = Object.freeze({"kariniemi":"./kariniemi/kariniemi.js","kartano":"./kartano/kartano.js","paavola":"./paavola/paavola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
