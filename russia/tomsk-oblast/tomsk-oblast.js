// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tomsk-oblast","repository":"europe","path":"russia/tomsk-oblast","depth":2,"parent":"russia","children":["asino","kolpashevo","seversk","strezhevoy","tomsk"]});
export const childModules = Object.freeze({"asino":"./asino/asino.js","kolpashevo":"./kolpashevo/kolpashevo.js","seversk":"./seversk/seversk.js","strezhevoy":"./strezhevoy/strezhevoy.js","tomsk":"./tomsk/tomsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
