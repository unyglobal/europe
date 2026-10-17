// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tolosa","repository":"europe","path":"spain/basque-country/tolosa","depth":3,"parent":"spain/basque-country","children":["berazubi","bidebieta","iparragirre","iurre","rondilla","zuberoa","zuloaga"]});
export const childModules = Object.freeze({"berazubi":"./berazubi/berazubi.js","bidebieta":"./bidebieta/bidebieta.js","iparragirre":"./iparragirre/iparragirre.js","iurre":"./iurre/iurre.js","rondilla":"./rondilla/rondilla.js","zuberoa":"./zuberoa/zuberoa.js","zuloaga":"./zuloaga/zuloaga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
