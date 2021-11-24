import mime from "mime-types";
import FontFaceObserver from "fontfaceobserver";
import Vue from "vue";

class Preloader {
    image;
    images = [];

    font;
    fonts = [];

    webP = null;

    detectWebp() {
        return new Promise(res => {
            // some small (2x1 px) test images for each feature
            const base64 =
                "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";

            const image = document.createElement("img");
            image.onload = () => {
                if (image.width === 2 && image.height === 1) {
                    this.webP = true;
                } else {
                    this.webP = false;
                }
                res();
            };
            image.onerror = () => {
                this.webP = false;
                res();
            };
            image.src = base64;
        });
    }

    fetchImage(src) {
        return new Promise((res, rej) => {
            const image = new Image();
            image.onerror = rej;
            image.onload = res;
            image.src = src;
        });
    }

    async loadImage({ src, fallback }) {
        if (this.webP === null) {
            await this.detectWebp();
        }

        if (this.webp) {
            await this.fetchImage(src);
        } else {
            if (fallback) {
                src = fallback;

                try {
                    await this.fetchImage(src);
                } catch (e) {
                    throw "Both src and fallback can not be preloaded";
                }
            } else {
                // unable to load fallback
                throw "No preload fallback was provided";
            }
        }

        const resourceType = mime.lookup(src);
        const resource = { src, resourceType };

        // add resource to loaded list
        Vue.set(this.images, this.images.length, resource);

        this.image = resource;
        // return the src and type
        return resource;
    }

    async loadFont({ name, weight, style }) {
        const font = new FontFaceObserver(name, {
            weight,
            style
        });

        try {
            await font.load();
        } catch (e) {
            throw `Font ${name} ${weight} ${style} can not be preloaded`;
        }

        const resource = { name, weight, style };

        // add font to loaded list
        Vue.set(this.fonts, this.fonts.length, resource);

        this.font = resource;
        return resource;
    }
}

export default (context, inject) => {
    const preload = new Preloader();
    const injectable = Vue.observable(preload);

    inject("preload", injectable);
};