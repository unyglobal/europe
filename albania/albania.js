// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"albania","repository":"europe","path":"albania","depth":1,"parent":"","children":["berat-county","diber-county","durres-county","elbasan-county","fier-county","gjirokaster-county","korce-county","kukes-county","lezhe-county","shkoder-county","tirana","vlore-county"]});
export const childModules = Object.freeze({"berat-county":"./berat-county/berat-county.js","diber-county":"./diber-county/diber-county.js","durres-county":"./durres-county/durres-county.js","elbasan-county":"./elbasan-county/elbasan-county.js","fier-county":"./fier-county/fier-county.js","gjirokaster-county":"./gjirokaster-county/gjirokaster-county.js","korce-county":"./korce-county/korce-county.js","kukes-county":"./kukes-county/kukes-county.js","lezhe-county":"./lezhe-county/lezhe-county.js","shkoder-county":"./shkoder-county/shkoder-county.js","tirana":"./tirana/tirana.js","vlore-county":"./vlore-county/vlore-county.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
