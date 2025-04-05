<template>
    <div>
        <div v-if="editor" class="flex gap-2 flex-wrap">
            <AdminEditorButton
                @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }"
            >
                bold
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }"
            >
                italic
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }"
            >
                strike
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }"
            >
                code
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().unsetAllMarks().run()"
            >
                clear marks
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().clearNodes().run()"
            >
                clear nodes
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }"
            >
                paragraph
            </AdminEditorButton>
            <AdminEditorButton
                @click="
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 1 }),
                }"
            >
                h1
            </AdminEditorButton>
            <AdminEditorButton
                @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 2 }),
                }"
            >
                h2
            </AdminEditorButton>
            <AdminEditorButton
                @click="
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 3 }),
                }"
            >
                h3
            </AdminEditorButton>
            <AdminEditorButton
                @click="
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 4 }),
                }"
            >
                h4
            </AdminEditorButton>
            <AdminEditorButton
                @click="
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 5 }),
                }"
            >
                h5
            </AdminEditorButton>
            <AdminEditorButton
                @click="
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 6 }),
                }"
            >
                h6
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }"
            >
                bullet list
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }"
            >
                ordered list
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }"
            >
                code block
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }"
            >
                blockquote
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().setHorizontalRule().run()"
            >
                horizontal rule
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().setHardBreak().run()"
            >
                hard break
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().undo().run()"
                :disabled="!editor.can().chain().focus().undo().run()"
            >
                undo
            </AdminEditorButton>
            <AdminEditorButton
                @click="editor.chain().focus().redo().run()"
                :disabled="!editor.can().chain().focus().redo().run()"
            >
                redo
            </AdminEditorButton>
        </div>
        <TiptapEditorContent :editor="editor" />
    </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()

const editor = useEditor({
    content: model.value,
    extensions: [TiptapStarterKit],
    onUpdate({ editor }) {
        model.value = editor.getHTML()
    },
})

// // Слежение за внешними изменениями
// watch(model, (newValue) => {
//     if (editor.value && newValue !== editor.value.getHTML()) {
//         editor.value.commands.setContent(newValue)
//     }
// })

onBeforeUnmount(() => {
    unref(editor).destroy()
})
</script>
