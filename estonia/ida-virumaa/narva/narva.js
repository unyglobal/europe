// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"narva","repository":"europe","path":"estonia/ida-virumaa/narva","depth":3,"parent":"estonia/ida-virumaa","children":["joaoru","kadastiku","vanalinn"]});
export const childModules = Object.freeze({"joaoru":"./joaoru/joaoru.js","kadastiku":"./kadastiku/kadastiku.js","vanalinn":"./vanalinn/vanalinn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
