// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"overijssel","repository":"europe","path":"netherlands/overijssel","depth":2,"parent":"netherlands","children":["almelo","borne","dalfsen","deventer","enschede","glanerbrug","haaksbergen","hardenberg","hengelo","kampen","losser","nijverdal","oldenzaal","raalte","rijssen","staphorst","steenwijk","tubbergen","wierden","zwolle"]});
export const childModules = Object.freeze({"almelo":"./almelo/almelo.js","borne":"./borne/borne.js","dalfsen":"./dalfsen/dalfsen.js","deventer":"./deventer/deventer.js","enschede":"./enschede/enschede.js","glanerbrug":"./glanerbrug/glanerbrug.js","haaksbergen":"./haaksbergen/haaksbergen.js","hardenberg":"./hardenberg/hardenberg.js","hengelo":"./hengelo/hengelo.js","kampen":"./kampen/kampen.js","losser":"./losser/losser.js","nijverdal":"./nijverdal/nijverdal.js","oldenzaal":"./oldenzaal/oldenzaal.js","raalte":"./raalte/raalte.js","rijssen":"./rijssen/rijssen.js","staphorst":"./staphorst/staphorst.js","steenwijk":"./steenwijk/steenwijk.js","tubbergen":"./tubbergen/tubbergen.js","wierden":"./wierden/wierden.js","zwolle":"./zwolle/zwolle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
