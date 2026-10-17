// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moldova","repository":"europe","path":"moldova","depth":1,"parent":"","children":["balti","bender-municipality","cahul","causeni","chisinau-municipality","drochia","floresti","gagauzia","hincesti","orhei","raionul-edinet","singerei","soroca-district","straseni","transnistria","ungheni"]});
export const childModules = Object.freeze({"balti":"./balti/balti.js","bender-municipality":"./bender-municipality/bender-municipality.js","cahul":"./cahul/cahul.js","causeni":"./causeni/causeni.js","chisinau-municipality":"./chisinau-municipality/chisinau-municipality.js","drochia":"./drochia/drochia.js","floresti":"./floresti/floresti.js","gagauzia":"./gagauzia/gagauzia.js","hincesti":"./hincesti/hincesti.js","orhei":"./orhei/orhei.js","raionul-edinet":"./raionul-edinet/raionul-edinet.js","singerei":"./singerei/singerei.js","soroca-district":"./soroca-district/soroca-district.js","straseni":"./straseni/straseni.js","transnistria":"./transnistria/transnistria.js","ungheni":"./ungheni/ungheni.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
