// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suceava","repository":"europe","path":"romania/suceava","depth":2,"parent":"romania","children":["campulung-moldovenesc","falticeni","gura-humorului","radauti","vatra-dornei"]});
export const childModules = Object.freeze({"campulung-moldovenesc":"./campulung-moldovenesc/campulung-moldovenesc.js","falticeni":"./falticeni/falticeni.js","gura-humorului":"./gura-humorului/gura-humorului.js","radauti":"./radauti/radauti.js","vatra-dornei":"./vatra-dornei/vatra-dornei.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
