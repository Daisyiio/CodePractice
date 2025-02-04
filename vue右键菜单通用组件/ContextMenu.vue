<template>
    <ContextMenu
      :items="defaultItems"
      @select="handleSelect"
    >
      <template #trigger>
        <div class="custom-area">
          右键点击此区域
        </div>
      </template>
  
      <!-- 自定义菜单项 -->
      <div class="custom-item" @click="customAction">
        自定义菜单项
      </div>
    </ContextMenu>
  </template>
  
  <script setup>
  import ContextMenu from './ContextMenu.vue'
  
  const defaultItems = [
    { label: '刷新', handler: () => location.reload() },
    { label: '返回', handler: () => history.back() }
  ]
  
  const handleSelect = (item) => {
    console.log('Selected:', item)
  }
  
  const customAction = () => {
    console.log('Custom action triggered')
  }
  </script>