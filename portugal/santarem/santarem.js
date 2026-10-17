// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santarem","repository":"europe","path":"portugal/santarem","depth":2,"parent":"portugal","children":["entroncamento","monsanto","tomar","torres-novas"]});
export const childModules = Object.freeze({"entroncamento":"./entroncamento/entroncamento.js","monsanto":"./monsanto/monsanto.js","tomar":"./tomar/tomar.js","torres-novas":"./torres-novas/torres-novas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
