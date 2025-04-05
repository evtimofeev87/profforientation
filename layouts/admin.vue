<template>
    <div class="flex flex-col h-screen">
        <header class="h-[80px] bg-slate-400"></header>
        <main class="flex flex-1">
            <AdminLayoutSidebar class="w-[300px] bg-slate-200" />
            <div class="p-[24px] flex-1">
                <slot> </slot>
            </div>
        </main>
    </div>
</template>
