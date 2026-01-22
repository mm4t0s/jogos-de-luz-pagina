import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const require = createRequire(import.meta.url);
const JimpPackage = require("jimp");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_PATH = path.resolve(__dirname, "src/assets/logo.png");

async function processImage() {
    console.log("Reading image from:", IMAGE_PATH);

    let Jimp = JimpPackage.default || JimpPackage;
    if (JimpPackage.Jimp) Jimp = JimpPackage.Jimp;

    const image = await Jimp.read(IMAGE_PATH);

    const threshold = 30;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const red = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue = this.bitmap.data[idx + 2];

        if (red < threshold && green < threshold && blue < threshold) {
            this.bitmap.data[idx + 3] = 0;
        }
    });

    console.log("Getting buffer (callback)...");

    const buffer = await new Promise((resolve, reject) => {
        image.getBuffer("image/png", (err, buf) => {
            if (err) reject(err);
            else resolve(buf);
        });
    });

    console.log("Writing file...");
    await fs.writeFile(IMAGE_PATH, buffer);

    console.log("Image processed and saved.");
}

processImage().catch(console.error);
