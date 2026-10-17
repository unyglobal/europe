// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ivanovo-oblast","repository":"europe","path":"russia/ivanovo-oblast","depth":2,"parent":"russia","children":["furmanov","ivanovo","kineshma","kokhma","privolzhsk","rodniki","shuya","teykovo","vichuga"]});
export const childModules = Object.freeze({"furmanov":"./furmanov/furmanov.js","ivanovo":"./ivanovo/ivanovo.js","kineshma":"./kineshma/kineshma.js","kokhma":"./kokhma/kokhma.js","privolzhsk":"./privolzhsk/privolzhsk.js","rodniki":"./rodniki/rodniki.js","shuya":"./shuya/shuya.js","teykovo":"./teykovo/teykovo.js","vichuga":"./vichuga/vichuga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
