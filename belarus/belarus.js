// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belarus","repository":"europe","path":"belarus","depth":1,"parent":"","children":["brest","grodnenskaya","homyel-voblasc","minsk","minsk-city","mogilev","vitebsk"]});
export const childModules = Object.freeze({"brest":"./brest/brest.js","grodnenskaya":"./grodnenskaya/grodnenskaya.js","homyel-voblasc":"./homyel-voblasc/homyel-voblasc.js","minsk":"./minsk/minsk.js","minsk-city":"./minsk-city/minsk-city.js","mogilev":"./mogilev/mogilev.js","vitebsk":"./vitebsk/vitebsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
