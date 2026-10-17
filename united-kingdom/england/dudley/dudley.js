// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dudley","repository":"europe","path":"united-kingdom/england/dudley","depth":3,"parent":"united-kingdom/england","children":["baptist-end","blowers-green","dixon-s-green","kates-hill","old-dock"]});
export const childModules = Object.freeze({"baptist-end":"./baptist-end/baptist-end.js","blowers-green":"./blowers-green/blowers-green.js","dixon-s-green":"./dixon-s-green/dixon-s-green.js","kates-hill":"./kates-hill/kates-hill.js","old-dock":"./old-dock/old-dock.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
