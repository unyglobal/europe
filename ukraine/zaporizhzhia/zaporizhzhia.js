// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaporizhzhia","repository":"europe","path":"ukraine/zaporizhzhia","depth":2,"parent":"ukraine","children":["berdyansk","dniprorudne","enerhodar","kosmichnyi","melitopol","polohy","tokmak","vilnyansk","zaporizhzhya"]});
export const childModules = Object.freeze({"berdyansk":"./berdyansk/berdyansk.js","dniprorudne":"./dniprorudne/dniprorudne.js","enerhodar":"./enerhodar/enerhodar.js","kosmichnyi":"./kosmichnyi/kosmichnyi.js","melitopol":"./melitopol/melitopol.js","polohy":"./polohy/polohy.js","tokmak":"./tokmak/tokmak.js","vilnyansk":"./vilnyansk/vilnyansk.js","zaporizhzhya":"./zaporizhzhya/zaporizhzhya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
