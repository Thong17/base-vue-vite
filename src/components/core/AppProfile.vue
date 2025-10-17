<template>
  <DropdownMenu :options="ProfileOptions" @change="handleSelectProfileMenu">
    <Button variant="ghost" class="rounded-full gap-0">
      <Icon icon="local:profile-circle" class="mr-2" style="width: 23px; height: 23px" />
      <span class="font-normal">Profile</span>
      <Icon icon="local:caret-down-solid" style="width: 23px; height: 23px" />
    </Button>
    <template #option>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="handleLogout">
        <span>Log out</span>
      </DropdownMenuItem>
    </template>
  </DropdownMenu>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { Button } from '@/components/ui/button'
  import { IDropdownProps } from '@/components/shared/DropdownMenu.vue'
  import { DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
  import { useAuthStore } from '@/stores/auth'

  const auth = useAuthStore()
  const router = useRouter()

  const handleSelectProfileMenu = (value: 'profile') => {
    console.log(value)
  }
  const handleLogout = async () => {
    try {
      await auth.logout()
      router.push({ name: 'Login' })
    } catch (e) {
      console.log(e)
    }
  }
  const ProfileOptions: IDropdownProps<'profile'>['options'] = [{ label: 'Profile', value: 'profile' }]
</script>

<script lang="ts">
  export default {}
</script>
