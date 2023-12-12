import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Tgc from "./Tgc/Tgc.js";
import Danish from "./Danish/Danish.js";
import Sailboat from "./Sailboat/Sailboat.js";
import Buildings from "./Buildings/Buildings.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Tgc: new Tgc({
    x: 12,
    y: 77,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 70,
    visible: true,
    layerOrder: 2
  }),
  Danish: new Danish({
    x: -172,
    y: -95,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 4
  }),
  Sailboat: new Sailboat({
    x: -16,
    y: -78,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 5
  }),
  Buildings: new Buildings({
    x: 150,
    y: -44,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 10,
    size: 50,
    visible: true,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: -140,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
