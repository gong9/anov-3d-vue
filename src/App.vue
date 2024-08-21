<script setup>
import { Color, MeshBasicMaterial } from '@anov/3d-core'

const handleClick = (node) => {
  node.material = new MeshBasicMaterial({
    color: new Color('#ccc'),
  })
}

const handleMouseover = (node) => {
  node.material = new MeshBasicMaterial({
    color: new Color('#fff'),
  })
}

const handleMouseout = (node) => {
  node.material = new MeshBasicMaterial({
    color: new Color('red'),
  })
}
</script>

<template>
  <div class="root">
    <AScene background="./demo.hdr">
      <AMesh :position="[0, 0, 0]" @click="handleClick" @mouseover="handleMouseover" @mouseout="handleMouseout">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="red" />
      </AMesh>
      <AMesh :position="[-10, 10, 0]">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="green" />
      </AMesh>
      <AMesh :position="[-10, -10, 0]">
        <ABoxGeometry :size="[1, 1, 1]" />
        <AMeshBasicMaterial color="yellow" />
      </AMesh>
      <AModel url="./222.glb" :position="[0, 10, 0]" :scale="[0.01, 0.01, 0.01]" />
    </AScene>
  </div>
</template>

<style scoped>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
