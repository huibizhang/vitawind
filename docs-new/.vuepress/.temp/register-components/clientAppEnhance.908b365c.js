import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Badge", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/Badge.vue"))),
  app.component("CreateVitawind", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/CreateVitawind.vue"))),
  app.component("Footer", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/Footer.vue"))),
  app.component("HomePage", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/HomePage.vue"))),
  app.component("Modal", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/Modal.vue"))),
  app.component("MyButton", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/MyButton.vue"))),
  app.component("TemplateItem", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/TemplateItem.vue"))),
  app.component("TemplateList", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/TemplateList.vue"))),
  app.component("Terminal", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/Terminal.vue"))),
  app.component("ToolToggle", defineAsyncComponent(() => import("/workspaces/vitawind/docs/.vuepress/global_components/ToolToggle.vue")))
}
