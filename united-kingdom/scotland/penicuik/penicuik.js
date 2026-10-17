// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"penicuik","repository":"europe","path":"united-kingdom/scotland/penicuik","depth":3,"parent":"united-kingdom/scotland","children":["broomhill","cornbank","cuiken","deanburn","eastfield","eskhill","kirkhill","ladywood","loanburn","town-centre","valleyfield"]});
export const childModules = Object.freeze({"broomhill":"./broomhill/broomhill.js","cornbank":"./cornbank/cornbank.js","cuiken":"./cuiken/cuiken.js","deanburn":"./deanburn/deanburn.js","eastfield":"./eastfield/eastfield.js","eskhill":"./eskhill/eskhill.js","kirkhill":"./kirkhill/kirkhill.js","ladywood":"./ladywood/ladywood.js","loanburn":"./loanburn/loanburn.js","town-centre":"./town-centre/town-centre.js","valleyfield":"./valleyfield/valleyfield.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
