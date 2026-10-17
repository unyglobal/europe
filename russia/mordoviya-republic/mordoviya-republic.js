// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mordoviya-republic","repository":"europe","path":"russia/mordoviya-republic","depth":2,"parent":"russia","children":["kovylkino","ruzayevka","saransk"]});
export const childModules = Object.freeze({"kovylkino":"./kovylkino/kovylkino.js","ruzayevka":"./ruzayevka/ruzayevka.js","saransk":"./saransk/saransk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
