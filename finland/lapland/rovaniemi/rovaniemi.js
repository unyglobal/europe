// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rovaniemi","repository":"europe","path":"finland/lapland/rovaniemi","depth":3,"parent":"finland/lapland","children":["etelarinne","korkalorinne","santamaki","suosiola"]});
export const childModules = Object.freeze({"etelarinne":"./etelarinne/etelarinne.js","korkalorinne":"./korkalorinne/korkalorinne.js","santamaki":"./santamaki/santamaki.js","suosiola":"./suosiola/suosiola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
