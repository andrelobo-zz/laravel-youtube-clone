<template>
  <div>
    <h5>Top Categories</h5>
    <ul class="list-group">
      <router-link class="list-group-item list-group-item-action justify-content-between"
         :class="{ active: category.id === active }"
         :to="{ name: 'Category', params: { id: category.id } }" v-for="category in categories" :key="category.id">
        {{category.name}}
        <span class="badge badge-default badge-pill">{{ category.videos_count }}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'categories',
    props: ['categories', 'active']
  }
</script>
