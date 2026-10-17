// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khabarovsk","repository":"europe","path":"russia/khabarovsk","depth":2,"parent":"russia","children":["amursk","bikin","komsomolsk-on-amur","nikolayevsk-on-amure","sovetskaya-gavan","vanino","vyazemskiy"]});
export const childModules = Object.freeze({"amursk":"./amursk/amursk.js","bikin":"./bikin/bikin.js","komsomolsk-on-amur":"./komsomolsk-on-amur/komsomolsk-on-amur.js","nikolayevsk-on-amure":"./nikolayevsk-on-amure/nikolayevsk-on-amure.js","sovetskaya-gavan":"./sovetskaya-gavan/sovetskaya-gavan.js","vanino":"./vanino/vanino.js","vyazemskiy":"./vyazemskiy/vyazemskiy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
