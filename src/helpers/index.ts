export const routeGroup = (name: string, path: string, importPath: string) => {
  return [
    {
      name: name + 'List',
      path: path + '/list',
      component: () => import(/* @vite-ignore */ `${importPath}/views/index.vue`),
      meta: {
        title: name.toLowerCase(),
        middleware: [],
        moduleName: name,
        icon: 'local:profile-circle',
      },
    },
    {
      name: name + 'Detail',
      path: path + '/detail',
      component: () => import(/* @vite-ignore */ `${importPath}/views/detail.vue`),
      meta: {
        title: name.toLowerCase(),
        middleware: [],
        moduleName: name,
        icon: 'local:profile-circle',
      },
    },
    {
      name: name + 'Create',
      path: path + '/create',
      component: () => import(/* @vite-ignore */ `${importPath}/views/create.vue`),
      meta: {
        title: name.toLowerCase(),
        middleware: [],
        moduleName: name,
        icon: 'local:profile-circle',
      },
    },
    {
      name: name + 'Update',
      path: path + '/update',
      component: () => import(/* @vite-ignore */ `${importPath}/views/update.vue`),
      meta: {
        title: name.toLowerCase(),
        middleware: [],
        moduleName: name,
        icon: 'local:profile-circle',
      },
    },
  ]
}
