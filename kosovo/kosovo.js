// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kosovo","repository":"europe","path":"kosovo","depth":1,"parent":"","children":["ferizaj","gjakova","gjilan","mitrovica","pec","pristina","prizren"]});
export const childModules = Object.freeze({"ferizaj":"./ferizaj/ferizaj.js","gjakova":"./gjakova/gjakova.js","gjilan":"./gjilan/gjilan.js","mitrovica":"./mitrovica/mitrovica.js","pec":"./pec/pec.js","pristina":"./pristina/pristina.js","prizren":"./prizren/prizren.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
