// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petrila","repository":"europe","path":"romania/hunedoara-county/petrila","depth":3,"parent":"romania/hunedoara-county","children":["arsuri","berceni","bivaoani","botani","caplaresti","jitani","lonea","lunca","mosici","prodeni","saljani"]});
export const childModules = Object.freeze({"arsuri":"./arsuri/arsuri.js","berceni":"./berceni/berceni.js","bivaoani":"./bivaoani/bivaoani.js","botani":"./botani/botani.js","caplaresti":"./caplaresti/caplaresti.js","jitani":"./jitani/jitani.js","lonea":"./lonea/lonea.js","lunca":"./lunca/lunca.js","mosici":"./mosici/mosici.js","prodeni":"./prodeni/prodeni.js","saljani":"./saljani/saljani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
