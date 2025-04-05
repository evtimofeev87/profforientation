<template>
    <div class="nav-section">
        <NavigationItem label="Блог" to="/blog" page-name="blog" />
        <NavigationItem label="Профориентация" to="/#proforientation" />
        <NavigationItem
            label="Каталог профессий"
            to="/professions"
            page-name="professions"
        />
    </div>
</template>

<style>
.nav-section {
    display: inline-flex;
    align-items: center;
    gap: 13px;
    margin-left: auto;
}
</style>
