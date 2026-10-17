// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"federation-of-bandh","repository":"europe","path":"bosnia-and-herzegovina/federation-of-bandh","depth":2,"parent":"bosnia-and-herzegovina","children":["bihac","bosanska-krupa","bugojno","cazin","gorazde","gracanica","gradacac","ilidza","konjic","lukavac","mostar","sarajevo","travnik","tuzla","velika-kladusa","visoko","zenica"]});
export const childModules = Object.freeze({"bihac":"./bihac/bihac.js","bosanska-krupa":"./bosanska-krupa/bosanska-krupa.js","bugojno":"./bugojno/bugojno.js","cazin":"./cazin/cazin.js","gorazde":"./gorazde/gorazde.js","gracanica":"./gracanica/gracanica.js","gradacac":"./gradacac/gradacac.js","ilidza":"./ilidza/ilidza.js","konjic":"./konjic/konjic.js","lukavac":"./lukavac/lukavac.js","mostar":"./mostar/mostar.js","sarajevo":"./sarajevo/sarajevo.js","travnik":"./travnik/travnik.js","tuzla":"./tuzla/tuzla.js","velika-kladusa":"./velika-kladusa/velika-kladusa.js","visoko":"./visoko/visoko.js","zenica":"./zenica/zenica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
