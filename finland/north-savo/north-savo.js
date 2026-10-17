// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-savo","repository":"europe","path":"finland/north-savo","depth":2,"parent":"finland","children":["iisalmi","kuopio","siilinjarvi","varkaus"]});
export const childModules = Object.freeze({"iisalmi":"./iisalmi/iisalmi.js","kuopio":"./kuopio/kuopio.js","siilinjarvi":"./siilinjarvi/siilinjarvi.js","varkaus":"./varkaus/varkaus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
