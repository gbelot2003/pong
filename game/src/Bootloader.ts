export class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
        console.log('Scene Bootloader');
    }

    preload(): void {
        this.load.setPath('assets/');
        this.load.image('phaser3_cli');
        this.load.image("left_pallete");
        this.load.image("right_pallete");
        this.load.image("ball");
        this.load.image("separator");

        this.load.on('complete', () => {
            this.scene.start('MainScene');
        });
    }

}
