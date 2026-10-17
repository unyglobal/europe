// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tongelre","repository":"europe","path":"netherlands/north-brabant/tongelre","depth":3,"parent":"netherlands/north-brabant","children":["koudenhoven","muschberg-en-geestenberg","t-hofke"]});
export const childModules = Object.freeze({"koudenhoven":"./koudenhoven/koudenhoven.js","muschberg-en-geestenberg":"./muschberg-en-geestenberg/muschberg-en-geestenberg.js","t-hofke":"./t-hofke/t-hofke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
