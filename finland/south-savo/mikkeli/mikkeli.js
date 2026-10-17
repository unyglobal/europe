// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mikkeli","repository":"europe","path":"finland/south-savo/mikkeli","depth":3,"parent":"finland/south-savo","children":["kaukola","maunuksela","nuijamies","saksala","savilahti"]});
export const childModules = Object.freeze({"kaukola":"./kaukola/kaukola.js","maunuksela":"./maunuksela/maunuksela.js","nuijamies":"./nuijamies/nuijamies.js","saksala":"./saksala/saksala.js","savilahti":"./savilahti/savilahti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
