import { Bootloader } from './Bootloader';
import { MainScene } from './scenes/MainScene';

export const CONFIG: any = {
    title: 'Pong',
    version: '0.0.1',
    type: Phaser.AUTO,
    backgroundColor: '#22a6b3',
    scale: {
        parent: 'phaser_container',
        width: 640,
        height: 400,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    render: {
        pixelArt: true,
    },
    physics: {
        default: 'arcade',
        // arcade: {
        //     gravity: {
        //         y: 500
        //     }
        // }
    },
    scene: [
        Bootloader,
        MainScene
    ]
};
