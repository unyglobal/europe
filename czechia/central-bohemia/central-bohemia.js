// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-bohemia","repository":"europe","path":"czechia/central-bohemia","depth":2,"parent":"czechia","children":["benesov","beroun","brandys-nad-labem-stara-boleslav","kladno","kolin","kralupy-nad-vltavou","kutna-hora","melnik","mlada-boleslav","neratovice","nymburk","podebrady","pribram","rakovnik","ricany","slany"]});
export const childModules = Object.freeze({"benesov":"./benesov/benesov.js","beroun":"./beroun/beroun.js","brandys-nad-labem-stara-boleslav":"./brandys-nad-labem-stara-boleslav/brandys-nad-labem-stara-boleslav.js","kladno":"./kladno/kladno.js","kolin":"./kolin/kolin.js","kralupy-nad-vltavou":"./kralupy-nad-vltavou/kralupy-nad-vltavou.js","kutna-hora":"./kutna-hora/kutna-hora.js","melnik":"./melnik/melnik.js","mlada-boleslav":"./mlada-boleslav/mlada-boleslav.js","neratovice":"./neratovice/neratovice.js","nymburk":"./nymburk/nymburk.js","podebrady":"./podebrady/podebrady.js","pribram":"./pribram/pribram.js","rakovnik":"./rakovnik/rakovnik.js","ricany":"./ricany/ricany.js","slany":"./slany/slany.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
