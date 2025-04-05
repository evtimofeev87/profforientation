export default defineNuxtRouteMiddleware((to) => {
    if (
        to.path === '/admin' ||
        (to.path.startsWith('/admin/') && to.matched.length === 0)
    ) {
        return navigateTo('/admin/posts', { replace: true })
    }
})
