// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harjumaa","repository":"europe","path":"estonia/harjumaa","depth":2,"parent":"estonia","children":["haabersti","kesklinn","kristiine","lasnamae","maardu","mustamae","nomme","pirita","pohja-tallinn","tallinn"]});
export const childModules = Object.freeze({"haabersti":"./haabersti/haabersti.js","kesklinn":"./kesklinn/kesklinn.js","kristiine":"./kristiine/kristiine.js","lasnamae":"./lasnamae/lasnamae.js","maardu":"./maardu/maardu.js","mustamae":"./mustamae/mustamae.js","nomme":"./nomme/nomme.js","pirita":"./pirita/pirita.js","pohja-tallinn":"./pohja-tallinn/pohja-tallinn.js","tallinn":"./tallinn/tallinn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
