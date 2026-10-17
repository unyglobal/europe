// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grodnenskaya","repository":"europe","path":"belarus/grodnenskaya","depth":2,"parent":"belarus","children":["astraviec","hrodna","lida","novogrudok","oshmyany","shchuchyn","slonim","smarhon","vaukavysk"]});
export const childModules = Object.freeze({"astraviec":"./astraviec/astraviec.js","hrodna":"./hrodna/hrodna.js","lida":"./lida/lida.js","novogrudok":"./novogrudok/novogrudok.js","oshmyany":"./oshmyany/oshmyany.js","shchuchyn":"./shchuchyn/shchuchyn.js","slonim":"./slonim/slonim.js","smarhon":"./smarhon/smarhon.js","vaukavysk":"./vaukavysk/vaukavysk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
