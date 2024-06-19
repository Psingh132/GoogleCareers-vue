<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile image" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'photo-1593085512500-5d55148d6f0d.avif'
    }
  }
}
</script>
