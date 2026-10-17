// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"omsk-oblast","repository":"europe","path":"russia/omsk-oblast","depth":2,"parent":"russia","children":["isil-kul","kalachinsk","omsk","tara"]});
export const childModules = Object.freeze({"isil-kul":"./isil-kul/isil-kul.js","kalachinsk":"./kalachinsk/kalachinsk.js","omsk":"./omsk/omsk.js","tara":"./tara/tara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
