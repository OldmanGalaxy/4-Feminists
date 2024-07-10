import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/Addons.js';

export default class animalScene {
  constructor(canvasId) {
    this.dimensions = document.getElementsByClassName('canvas-container')[0].getBoundingClientRect();
    this.height = this.dimensions.height;
    this.width = this.dimensions.width;
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    this.fov = 40;
    this.nearPlane = 0.1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    this.controls = undefined;
    this.clock = new THREE.Clock();

    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.width / this.height, // w / h
      1,
      1000
    );

    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.camera.position.x = -2;
    this.camera.position.y = -1;
    this.camera.position.z = 30;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xB7B597, 1);
    document.getElementsByClassName("canvas-container")[0].appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.controls.target.x = 0;
    // this.controls.target.y = 150;
    // this.controls.target.z = -5;

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.ambientLight.castShadow = true;
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
    // console.log("Position: " + this.camera.position.x + "," + this.camera.position.y + "," + this.camera.position.z);
    // console.log("Target: " + this.controls.target.x + "," + this.controls.target.y + "," + this.controls.target.z);
  }

  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
};