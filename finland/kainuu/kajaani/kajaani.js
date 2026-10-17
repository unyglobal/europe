// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kajaani","repository":"europe","path":"finland/kainuu/kajaani","depth":3,"parent":"finland/kainuu","children":["teppana","ylakaupunki"]});
export const childModules = Object.freeze({"teppana":"./teppana/teppana.js","ylakaupunki":"./ylakaupunki/ylakaupunki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
