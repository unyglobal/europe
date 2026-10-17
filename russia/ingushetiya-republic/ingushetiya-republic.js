// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ingushetiya-republic","repository":"europe","path":"russia/ingushetiya-republic","depth":2,"parent":"russia","children":["ekazhevo","kantyshevo","karabulak","malgobek","nazran","nesterovskaya","staryy-malgobek","sunzha","surkhakhi","troitskaya"]});
export const childModules = Object.freeze({"ekazhevo":"./ekazhevo/ekazhevo.js","kantyshevo":"./kantyshevo/kantyshevo.js","karabulak":"./karabulak/karabulak.js","malgobek":"./malgobek/malgobek.js","nazran":"./nazran/nazran.js","nesterovskaya":"./nesterovskaya/nesterovskaya.js","staryy-malgobek":"./staryy-malgobek/staryy-malgobek.js","sunzha":"./sunzha/sunzha.js","surkhakhi":"./surkhakhi/surkhakhi.js","troitskaya":"./troitskaya/troitskaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
