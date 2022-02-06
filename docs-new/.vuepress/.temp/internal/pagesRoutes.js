import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Vitawind - The Lightning Wind, Stronger and Faster."},["/index.html","/index.md"]],
  ["v-0cd45c50","/guide/configurations.html",{"title":"Configurations"},["/guide/configurations","/guide/configurations.md"]],
  ["v-fffb8e28","/guide/",{"title":""},["/guide/index.html","/guide/index.md"]],
  ["v-7873bc78","/guide/usage.html",{"title":"Usage"},["/guide/usage","/guide/usage.md"]],
  ["v-6ab29dae","/scaffolding/creator.html",{"title":"Creator"},["/scaffolding/creator","/scaffolding/creator.md"]],
  ["v-3cbd6208","/scaffolding/",{"title":"Scaffolding"},["/scaffolding/index.html","/scaffolding/index.md"]],
  ["v-13ddff3c","/scaffolding/templates.html",{"title":"Templates"},["/scaffolding/templates","/scaffolding/templates.md"]],
  ["v-2d0ad528","/zh/",{"title":"嗨!"},["/zh/index.html","/zh/index.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
