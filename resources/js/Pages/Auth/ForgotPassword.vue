<template>
  <authentication-card>
    <div class="mb-4 text-sm text-gray-600">
      Forgot your password? No problem. Just let us know your email address and
      we will email you a password reset link that will allow you to choose a
      new one.
    </div>

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <v-text-field
          v-model="form.email"
          label="Email"
          type="email"
          required
          autofocus
          :error-messages="errors['email']"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <v-btn outlined dark color="blue accent-4" :loading="form.processing">
          Email Password Reset Link
        </v-btn>
      </div>
    </form>
  </authentication-card>
</template>

<script>
import AuthenticationCard from "@/components/Auth/AuthenticationCard";
import AuthenticationCardLogo from "@/components/Auth/AuthenticationCardLogo";
import GuestLayout from "@/Layouts/GuestLayout";

export default {
  components: {
    AuthenticationCard,
    AuthenticationCardLogo,
  },

  layout: GuestLayout,

  props: {
    status: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      form: this.$inertia.form({
        email: "",
      }),
    };
  },
  computed: {
    errors() {
      return this.$page.props.errors;
    },

    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
  },

  methods: {
    submit() {
      this.form.post(this.route("password.email"));
    },
  },
};
</script>
