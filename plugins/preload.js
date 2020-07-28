import mime from 'mime-types';
import Vue from 'vue';

export default (context, inject) => {

  const getImage = ({src}) => {
    return new Promise((res, rej) => {

      const image = new Image();
      image.onerror = rej;
      image.onload = res;
      image.src = src;

    });
  }

  // remove extension from src
  const getName = (src) => {
    if(!src.includes('.')){
      return src;
    }

    const splitSrc = src.split('.');
    splitSrc.pop();
    return splitSrc.join('.');
  }

  const preload = {
    loaded: [],
    load: async function({src, fallback}){
      try{
        await getImage({ src });
      }catch(e){
        // lets try to get the fallback instead
        src = fallback;
        await getImage({ src });
      }

      const type = mime.lookup(src);

      // add name to loaded list
      const name = getName(src);
      Vue.set(this.loaded, this.loaded.length, name);

      // return the src and type
      return { src, type };
    }
  }

  inject('preload', preload)
}