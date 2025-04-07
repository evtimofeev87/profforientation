<template>
    <div class="flex flex-col h-screen">
        <header class="h-[80px] flex-shrink-0 bg-slate-200">asdfasf</header>
        <main class="flex flex-1">
            <AdminLayoutSidebar class="w-[300px] bg-slate-100" />
            <div class="p-[24px] flex-1 h-full">
                <slot> </slot>
            </div>
        </main>
    </div>
</template>
