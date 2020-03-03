<template>
  <section>
      <h2>
        {{ title }}
      </h2>
      <section>
          counter: {{ $store.state.counter.counter }}
          <button v-on:click="$store.commit('counter/countUp')">+1</button>
          <button v-on:click="$store.commit('counter/reset')">Reset</button>
      </section>
  </section>
</template>

<script>

export default {
  data: function() {
      return {
          title: 'Counter App'
      }
  }
}
</script>
