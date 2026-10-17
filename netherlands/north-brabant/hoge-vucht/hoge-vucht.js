// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hoge-vucht","repository":"europe","path":"netherlands/north-brabant/hoge-vucht","depth":3,"parent":"netherlands/north-brabant","children":["biesdonk","de-geeren","waterdonken","wisselaar"]});
export const childModules = Object.freeze({"biesdonk":"./biesdonk/biesdonk.js","de-geeren":"./de-geeren/de-geeren.js","waterdonken":"./waterdonken/waterdonken.js","wisselaar":"./wisselaar/wisselaar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
