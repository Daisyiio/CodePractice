<template>
    <div class="context-menu-wrapper">
      <!-- 触发右键菜单的区域 -->
      <div
        @contextmenu.prevent="openMenu"
      >
        <slot name="trigger"></slot>
      </div>
  
      <!-- 菜单内容 -->
      <teleport to="body">
        <transition name="menu">
          <div
            v-show="visible"
            ref="menuRef"
            class="context-menu"
            :style="menuStyle"
          >
            <div
              v-for="(item, index) in menuItems"
              :key="index"
              class="menu-item"
              @click="handleClick(item)"
            >
              {{ item.label }}
            </div>
            <!-- 支持自定义菜单内容 -->
            <slot></slot>
          </div>
        </transition>
      </teleport>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  
  const props = defineProps({
    // 菜单项数组
    items: {
      type: Array,
      default: () => []
    },
    // 控制显示
    modelValue: {
      type: Boolean,
      default: false
    },
    // 菜单宽度
    width: {
      type: [String, Number],
      default: '160px'
    },
    // 位置偏移
    offset: {
      type: Number,
      default: 4
    }
  })
  
  const emit = defineEmits(['update:modelValue', 'select'])
  
  const visible = ref(false)
  const menuRef = ref(null)
  const position = ref({ x: 0, y: 0 })
  
  // 合并默认菜单项和传入的菜单项
  const menuItems = computed(() => [
    ...props.items
  ])
  
  // 菜单样式
  const menuStyle = computed(() => ({
    left: `${position.value.x}px`,
    top: `${position.value.y}px`,
    width: props.width,
    minWidth: typeof props.width === 'number' ? `${props.width}px` : props.width
  }))
  
  // 打开菜单
  const openMenu = (e) => {
    position.value = {
      x: e.clientX + props.offset,
      y: e.clientY + props.offset
    }
    visible.value = true
  }
  
  // 关闭菜单
  const closeMenu = () => {
    visible.value = false
    emit('update:modelValue', false)
  }
  
  // 处理菜单项点击
  const handleClick = (item) => {
    if (item.handler) {
      item.handler()
    }
    emit('select', item)
    closeMenu()
  }
  
  // 点击外部区域关闭
  onClickOutside(menuRef, closeMenu)
  
  // 监听modelValue变化
  watch(
    () => props.modelValue,
    (val) => {
      visible.value = val
    }
  )
  </script>
  
  <style scoped>
  .context-menu {
    position: fixed;
    background: white;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5px 0;
    z-index: 9999;
  }
  
  .menu-item {
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    color: #606266;
  }
  
  .menu-item:hover {
    background-color: #ecf5ff;
    color: #409eff;
  }
  
  .menu-enter-active,
  .menu-leave-active {
    transition: all 0.2s ease;
  }
  
  .menu-enter-from,
  .menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  </style>