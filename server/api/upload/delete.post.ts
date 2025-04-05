import { unlink } from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
    const { filePath } = await readBody(event)
    if (!filePath) return { success: false, message: 'Файл не найден' }

    const fileName = path.basename(filePath) // Извлекаем имя файла
    const fileToDelete = path.resolve('public/uploads', fileName)

    try {
        await unlink(fileToDelete)
        return { success: true }
    } catch (err) {
        console.error('Ошибка удаления файла:', err)
        return { success: false, message: 'Ошибка при удалении файла' }
    }
})
