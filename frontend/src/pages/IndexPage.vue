<template>
  <q-page class="q-pa-none">
    <div class="map-wrapper">
      <iframe
        src="/longan_map.html"
        class="map-iframe"
        frameborder="0"
      ></iframe>
    </div>
  </q-page>
</template>

<style>
.map-wrapper {
  width: 100%;
  height: calc(100vh - 50px); /* ลดสูงลงไม่ให้กิน header */
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
