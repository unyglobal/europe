// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monor","repository":"europe","path":"hungary/pest-county/monor","depth":3,"parent":"hungary/pest-county","children":["dettrichtanya","forrasszolo","laposhegy","madi-ut","majori-ut","malomhegy","paplapos"]});
export const childModules = Object.freeze({"dettrichtanya":"./dettrichtanya/dettrichtanya.js","forrasszolo":"./forrasszolo/forrasszolo.js","laposhegy":"./laposhegy/laposhegy.js","madi-ut":"./madi-ut/madi-ut.js","majori-ut":"./majori-ut/majori-ut.js","malomhegy":"./malomhegy/malomhegy.js","paplapos":"./paplapos/paplapos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
