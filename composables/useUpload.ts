export const useUpload = (fileUrl: Ref<string>) => {
    const uploadUrl = '/api/upload'

    const deleteUpload = async () => {
        return fetch('/api/upload/delete', {
            method: 'POST',
            body: JSON.stringify({ filePath: fileUrl.value }),
            headers: { 'Content-Type': 'application/json' },
        })
    }

    // Обрабатываем успешную загрузку
    const handleSuccess = (response: { url: string }) => {
        fileUrl.value = response.url
    }

    // Удаление изображения
    const handleRemove = () => {
        deleteUpload().then(() => {
            fileUrl.value = ''
        })
    }

    // Перед загрузкой: удаляем старый файл
    const beforeUpload = async () => {
        if (fileUrl.value) {
            await deleteUpload()
        }
        return true
    }

    return {
        uploadUrl,
        beforeUpload,
        handleRemove,
        handleSuccess,
    }
}
