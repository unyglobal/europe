// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrhead","repository":"europe","path":"united-kingdom/scotland/barrhead","depth":3,"parent":"united-kingdom/scotland","children":["arthurlie","crossmill","dunterlie","levernside","lochlibo","springhill"]});
export const childModules = Object.freeze({"arthurlie":"./arthurlie/arthurlie.js","crossmill":"./crossmill/crossmill.js","dunterlie":"./dunterlie/dunterlie.js","levernside":"./levernside/levernside.js","lochlibo":"./lochlibo/lochlibo.js","springhill":"./springhill/springhill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
