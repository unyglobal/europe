// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pirkanmaa","repository":"europe","path":"finland/pirkanmaa","depth":2,"parent":"finland","children":["hervanta","kangasala","lempaala","nokia","pirkkala","pohjois-hervanta","sastamala","tampere","valkeakoski","vammala","ylojarvi"]});
export const childModules = Object.freeze({"hervanta":"./hervanta/hervanta.js","kangasala":"./kangasala/kangasala.js","lempaala":"./lempaala/lempaala.js","nokia":"./nokia/nokia.js","pirkkala":"./pirkkala/pirkkala.js","pohjois-hervanta":"./pohjois-hervanta/pohjois-hervanta.js","sastamala":"./sastamala/sastamala.js","tampere":"./tampere/tampere.js","valkeakoski":"./valkeakoski/valkeakoski.js","vammala":"./vammala/vammala.js","ylojarvi":"./ylojarvi/ylojarvi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
