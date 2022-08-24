<template>
  <v-app>
    <v-app-bar app elevation="0" height="60px" fixed>
      <v-app-bar-title>
        <v-btn elevation="0" text height="40" width="150"> </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text class="mx-4" color="blue">
        <v-icon>mdi-home</v-icon>
        <span>Home</span>
      </v-btn>

      <v-btn text class="mx-6" color="blue">
        <v-icon>mdi-plus-box</v-icon>
        <span>Add post</span>
      </v-btn>

      <v-btn text class="mr-16" color="blue">
        <v-icon>mdi-wallet-travel</v-icon>
        <span>Jobs</span>
      </v-btn>
      <v-btn
        icon
        @click.prevent="$vuetify.theme.dark = !$vuetify.theme.dark"
        class="blue--text"
      >
        <v-icon v-if="!$vuetify.theme.dark"> mdi-weather-night </v-icon>
        <v-icon v-else> mdi-white-balance-sunny </v-icon>
      </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer app v-model="drawer" absolute temporary right>
        <v-list nav dense>
          <v-list-item class="px-0" style="height: 60px">
            <v-list-item-avatar size="24">
              <v-img :src="auth.user.featured_image" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ auth.user.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ auth.user.email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-3 mr-3"></v-divider>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block class="blue accent-4 white--text" @click="logout">
              <v-icon>mdi-lock</v-icon>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-app-bar>
    <v-main class="mb-10">
      <flash-messages />
      <slot />
    </v-main>
    <footer-sec />
  </v-app>
</template>

<script>
import FooterSec from "@/Components/partials/FooterSec.vue";
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Account", icon: "mdi-account-box" },
        { title: "Admin", icon: "mdi-gavel" },
      ],
    };
  },
  components: {
    FooterSec,
  },

  data() {
    return {
      drawer: false,
      group: null,
      mini: true,
      menu: [
        {
          text: "Dashboard",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$inertia.post(route("logout"));
    },
  },
};
</script>
