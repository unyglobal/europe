// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-bohemian-region","repository":"europe","path":"czechia/south-bohemian-region","depth":2,"parent":"czechia","children":["ceske-budejovice","jindrichuv-hradec","pisek","strakonice","tabor"]});
export const childModules = Object.freeze({"ceske-budejovice":"./ceske-budejovice/ceske-budejovice.js","jindrichuv-hradec":"./jindrichuv-hradec/jindrichuv-hradec.js","pisek":"./pisek/pisek.js","strakonice":"./strakonice/strakonice.js","tabor":"./tabor/tabor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
