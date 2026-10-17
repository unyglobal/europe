// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pudsey","repository":"europe","path":"united-kingdom/england/pudsey","depth":3,"parent":"united-kingdom/england","children":["crimbles","fulneck","littlemoor-bottom"]});
export const childModules = Object.freeze({"crimbles":"./crimbles/crimbles.js","fulneck":"./fulneck/fulneck.js","littlemoor-bottom":"./littlemoor-bottom/littlemoor-bottom.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
