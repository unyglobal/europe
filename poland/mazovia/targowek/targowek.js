// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"targowek","repository":"europe","path":"poland/mazovia/targowek","depth":3,"parent":"poland/mazovia","children":["brodno-podgrodzie","brodno-rejon","nowe-brodno"]});
export const childModules = Object.freeze({"brodno-podgrodzie":"./brodno-podgrodzie/brodno-podgrodzie.js","brodno-rejon":"./brodno-rejon/brodno-rejon.js","nowe-brodno":"./nowe-brodno/nowe-brodno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
