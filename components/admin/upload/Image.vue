<template>
    <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :show-file-list="false"
        :before-upload="beforeUpload"
        :on-success="handleSuccess"
    >
        <el-button v-if="!model" type="primary"
            >Загрузить изображение</el-button
        >
        <div v-else class="image-container">
            <img :src="model" class="uploaded-image" />
            <el-icon class="delete-icon" @click.stop="handleRemove">
                <Delete
            /></el-icon>
        </div>
    </el-upload>
</template>

<script setup lang="ts">
import { useUpload } from '~/composables/useUpload'

const model = defineModel<string>({ default: '' })
const { uploadUrl, beforeUpload, handleRemove, handleSuccess } =
    useUpload(model)
</script>

<style scoped>
.image-container {
    position: relative;
    display: inline-block;
}

.uploaded-image {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
}

.delete-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    font-size: 22px;
}
</style>
