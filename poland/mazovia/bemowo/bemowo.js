// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bemowo","repository":"europe","path":"poland/mazovia/bemowo","depth":3,"parent":"poland/mazovia","children":["fort-radiowo","gorce-stare"]});
export const childModules = Object.freeze({"fort-radiowo":"./fort-radiowo/fort-radiowo.js","gorce-stare":"./gorce-stare/gorce-stare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
