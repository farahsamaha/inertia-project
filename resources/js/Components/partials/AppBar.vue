<template>
  <v-app-bar
    app
    light
    elevation="0"
    height="60px"
    fixed
    scroll-target="#scrolling-techniques"
  >
    <v-btn elevation="0" text height="40" width="150">
      <v-img
        class="mx-2 ml-5"
        src="../assets/logo2.png"
        max-height="100"
        max-width="130"
        contain
      >
      </v-img
    ></v-btn>
    <v-spacer></v-spacer>

    <v-btn
      class="d-flex justify-center justify-space-around mr-3 blue--text"
      large
      text
      height="35"
    >
      Login
    </v-btn>

    <v-btn
      class="d-flex justify-center justify-space-around mr-3 blue--text"
      large
      text
      height="35"
    >
      Register
    </v-btn>
    <v-btn
      icon
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      class="blue--text"
    >
      <v-icon v-if="!$vuetify.theme.dark"> mdi-weather-night </v-icon>
      <v-icon v-else> mdi-white-balance-sunny </v-icon>
    </v-btn>
  </v-app-bar>
</template>
