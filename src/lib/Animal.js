import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/Addons.js';

export default class Animal {
  constructor(canvasId, pos) {
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.height = document.getElementsByClassName("canvas-container")[0].getBoundingClientRect().height;
    this.width = document.getElementsByClassName("canvas-container")[0].getBoundingClientRect().width;

    this.fov = 40;
    this.canvasId = canvasId;
    this.pos = pos;

    this.controls = undefined;
    this.clock = new THREE.Clock();

    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.width / this.height,
      1,
      1000
    );
    this.camera.position.z = this.pos[2];
    this.camera.position.y = this.pos[1];
    this.camera.position.x = this.pos[0];

    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0x6A8B7B, 1);
    document.getElementsByClassName("canvas-container")[0].appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.ambientLight.castShadow = false;
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.height = document.getElementsByClassName("canvas-container")[0].getBoundingClientRect().height;
    this.width = document.getElementsByClassName("canvas-container")[0].getBoundingClientRect().width;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
};