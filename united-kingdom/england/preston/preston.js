// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"preston","repository":"europe","path":"united-kingdom/england/preston","depth":3,"parent":"united-kingdom/england","children":["adelphi","avenham","gallows-hill","maudlands"]});
export const childModules = Object.freeze({"adelphi":"./adelphi/adelphi.js","avenham":"./avenham/avenham.js","gallows-hill":"./gallows-hill/gallows-hill.js","maudlands":"./maudlands/maudlands.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
