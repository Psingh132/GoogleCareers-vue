<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent=""
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <TextInput v-model="role" placeholder="Software Engineer" />
      </div>
      <span
        class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in
      </span>
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <TextInput v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: '',
      location: ''
    }
  }
}
</script>
