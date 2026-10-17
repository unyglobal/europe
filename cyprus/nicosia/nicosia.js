// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nicosia","repository":"europe","path":"cyprus/nicosia","depth":2,"parent":"cyprus","children":["aglantzia","kato-lakatameia","morfou","strovolos"]});
export const childModules = Object.freeze({"aglantzia":"./aglantzia/aglantzia.js","kato-lakatameia":"./kato-lakatameia/kato-lakatameia.js","morfou":"./morfou/morfou.js","strovolos":"./strovolos/strovolos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
