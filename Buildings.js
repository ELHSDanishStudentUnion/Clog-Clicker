import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buildings extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("building-a", "./Buildings/costumes/building-a.svg", {
        x: 40,
        y: 30
      }),
      new Costume("building-b", "./Buildings/costumes/building-b.svg", {
        x: 46,
        y: -11
      }),
      new Costume("building-c", "./Buildings/costumes/building-c.svg", {
        x: 25,
        y: 17
      }),
      new Costume("building-d", "./Buildings/costumes/building-d.svg", {
        x: 59,
        y: -10
      }),
      new Costume("building-e", "./Buildings/costumes/building-e.svg", {
        x: 36,
        y: 55
      }),
      new Costume("building-f", "./Buildings/costumes/building-f.svg", {
        x: 41,
        y: 27
      }),
      new Costume("building-g", "./Buildings/costumes/building-g.svg", {
        x: 64,
        y: -65
      }),
      new Costume("building-h", "./Buildings/costumes/building-h.svg", {
        x: 33,
        y: 136
      }),
      new Costume("building-i", "./Buildings/costumes/building-i.svg", {
        x: 31,
        y: -12
      }),
      new Costume("building-j", "./Buildings/costumes/building-j.svg", {
        x: 29,
        y: 33
      })
    ];

    this.sounds = [new Sound("pop", "./Buildings/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(0.1);
      this.stage.vars.clogs +=
        5 *
        this.toNumber(this.stage.vars.clogFactory10k) *
        this.toNumber(this.stage.vars.clogMultiplier);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.clogFactory10k = 0;
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.compare(this.stage.vars.clogFactory10k, 1) > 0) {
        yield* this.wait(10);
        this.costume = "building-j";
        yield* this.wait(10);
        this.costume = "building-a";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (
      this.toNumber(this.stage.vars.clogs) === 10000 ||
      this.compare(this.stage.vars.clogs, 10000) > 0
    ) {
      this.stage.vars.clogs -= 10000;
      this.stage.vars.clogFactory10k++;
    }
  }
}
