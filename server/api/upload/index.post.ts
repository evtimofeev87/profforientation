import { defineEventHandler, readMultipartFormData } from 'h3'
import { promises as fs } from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export default defineEventHandler(async (event) => {
    const uploadDir = path.resolve('public/uploads')

    // Убедимся, что папка для загрузок существует
    await fs.mkdir(uploadDir, { recursive: true })

    // Читаем загруженный файл (ожидаем только 1 файл, а не массив)
    const files = await readMultipartFormData(event)

    if (!files || files.length === 0) {
        return { success: false, message: 'No file uploaded' }
    }

    // Берем только первый загруженный файл (игнорируем остальные, если они есть)
    const file = files[0]

    // Генерируем случайное имя с UUID + расширение
    const fileExt = path.extname(file.filename as string) // Получаем расширение
    const randomName = `${uuidv4()}${fileExt}` // Генерируем UUID + расширение
    const filePath = path.join(uploadDir, randomName)

    // Записываем файл в папку
    await fs.writeFile(filePath, file.data)

    return { success: true, url: `/uploads/${randomName}` } // Возвращаем путь к файлу
})
