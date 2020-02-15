<template>
  <section class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p> -->
      <p>{{ $store.state.hello.message }}</p>
      <!-- <button v-on:click="$store.commit('updateMessage')">Update</button> -->
      <!-- <button v-on:click="$store.commit('updateMessage', 'Commit is payload')">Update</button> -->
      <!-- <button v-on:click="$store.dispatch('updateMessageAction', 'Dispatch with payload')">Dispatch</button> -->
      <button v-on:click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload')">Dispatch</button>
    </div>
  </section>
</template>

<script>

export default {
}
</script>
