import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'characters', 'hero/red/walk/unarmed/down/001.png');
    this.scene = scene;

    this.playerSpeed = 50;

    // enable physics
    this.scene.physics.world.enable(this);

    // add our player to the scene
    this.scene.add.existing(this);

    this.makeAnimations([{
      atlas: 'characters',
      key: 'walk-down',
      prefix: 'hero/red/walk/unarmed/down/',
      numFrames: 2,
      frameRate: 12
    }, {
      atlas: 'characters',
      key: 'walk-up',
      prefix: 'hero/red/walk/unarmed/up/',
      numFrames: 2,
      frameRate: 12,
    }, {
      atlas: 'characters',
      key: 'walk-left',
      prefix: 'hero/red/walk/unarmed/left/',
      numFrames: 2,
      frameRate: 12
    }, {
      atlas: 'characters',
      key: 'walk-right',
      prefix: 'hero/red/walk/unarmed/right/',
      numFrames: 2,
      frameRate: 12
    }]);

  }

  update(cursors) {
    this.setVelocity(0, 0);
    if (cursors.up.isDown) {
      this.play('walk-up', true);
      this.setVelocityY(this.playerSpeed * -1);
    } else if (cursors.down.isDown) {
      this.play('walk-down', true);
      this.setVelocityY(this.playerSpeed);
    } else if (cursors.left.isDown) {
      this.setVelocityX(this.playerSpeed * -1);
      this.play('walk-left', true);
    } else if (cursors.right.isDown) {
      this.setVelocityX(this.playerSpeed);
      this.play('walk-right', true);
    } else {
      this.anims.stop();
    }
  }

  makeAnimations(animations) {
    animations.forEach((animation) => {
      let frameNames = this.scene.anims.generateFrameNames(animation.atlas, {
        start: 1,
        end: animation.numFrames,
        zeroPad: 3,
        prefix: animation.prefix,
        suffix: '.png'
      });

      this.scene.anims.create({
        key: animation.key,
        frames: frameNames,
        frameRate: animation.frameRate,
        repeat: -1
      });
    });
    
  }
}

