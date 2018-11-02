import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    // load in the spritesheet
    this.load.spritesheet('tiles', '../../assets/images/Overworld (Light).png', {
      frameWidth: 16,
      frameHeight: 16
    });

    // load the characters spritesheet
    this.load.multiatlas('characters', '../../assets/atlas/characters.json', 'assets/atlas');

    // load in the tilemap
    this.load.tilemapTiledJSON('map', '../../assets/spohn-point.json');
  }

  create() {
    this.scene.start('Game');
  }
}