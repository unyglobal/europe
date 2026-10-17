// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zarautz","repository":"europe","path":"spain/basque-country/zarautz","depth":3,"parent":"spain/basque-country","children":["azkenportu","inurritza","itsasmendi","mendilaueta","salbide","vista-alegre","zelaiondo"]});
export const childModules = Object.freeze({"azkenportu":"./azkenportu/azkenportu.js","inurritza":"./inurritza/inurritza.js","itsasmendi":"./itsasmendi/itsasmendi.js","mendilaueta":"./mendilaueta/mendilaueta.js","salbide":"./salbide/salbide.js","vista-alegre":"./vista-alegre/vista-alegre.js","zelaiondo":"./zelaiondo/zelaiondo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
