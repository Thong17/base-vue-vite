<template>
  <nav class="flex justify-between items-center bg-background px-5 border-b">
    <img :src="CONNECT_VENDOR_ICON" alt="connect vendor" width="140px" />
    <div class="flex gap-1 items-center">
      <slot></slot>
      <DropdownMenu :options="LanguageOptions" :value="locale" @change="handleLocaleChange">
        <Button variant="ghost" class="rounded-full">
          <span class="rounded-full w-6 h-6 overflow-hidden">
            <img :src="EN_ICON" alt="EN" />
          </span>
        </Button>
      </DropdownMenu>
      <Button variant="ghost" class="rounded-full">
        <Icon icon="local:bell-outline" style="width: 24px; height: 24px" />
      </Button>
      <DropdownMenu :options="ThemeOptions" :value="mode" @change="handleThemeChange">
        <Button variant="ghost" class="rounded-full">
          <Icon
            icon="local:moon-outline"
            style="width: 24px; height: 24px"
            class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="local:sun-outline"
            style="width: 24px; height: 24px"
            class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
        </Button>
      </DropdownMenu>
      <AppProfile />
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { BasicColorMode, useColorMode } from '@vueuse/core'
  import { Button } from '@/components/ui/button'
  import { IDropdownProps } from '@/components/shared/DropdownMenu.vue'
  import { useI18n } from 'vue-i18n'
  import EN_ICON from '@/assets/icons/en.png'
  import CONNECT_VENDOR_ICON from '@/assets/logos/connect-vendor.png'
  import AppProfile from '@/components/core/AppProfile.vue'

  const ThemeOptions: IDropdownProps<'light' | 'dark' | 'auto'>['options'] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'auto' },
  ]

  const LanguageOptions: IDropdownProps<'en' | 'kh'>['options'] = [
    { label: 'English', value: 'en' },
    { label: 'Khmer', value: 'kh' },
  ]

  const mode = useColorMode({ disableTransition: false })
  const { locale } = useI18n()

  const handleThemeChange = (value: BasicColorMode) => {
    mode.value = value
  }

  const handleLocaleChange = (value: 'en' | 'kh') => {
    locale.value = value
  }
</script>

<script lang="ts">
  export default {}
</script>

<style scoped>
  nav {
    height: 70px;
  }
</style>
