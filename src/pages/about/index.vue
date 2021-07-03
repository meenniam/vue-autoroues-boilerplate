<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ requiresAuth }}
  </div>
</template>

<route>
{
  "name": "about",
  "meta": {
    "requiresAuth": false
  }
}
</route>

<script>
export default {
  layout: "basic",
  computed: {
    requiresAuth() {
      return this.$route.meta.requiresAuth;
    }
  }
};
</script>
