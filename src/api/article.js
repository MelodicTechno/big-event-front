import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'

// 文章分类列表查询
export const articleCategoryListService = () => {
    // const tokenStore = useTokenStore();
    // pinia中的响应式数据不需要.value
    // return request.get('/category', {headers: {'Authorization': tokenStore.token}})
    return request.get('/category')
}

// 文章分类添加
export const articleCategoryAddService = (categoryData) => {
    return request.post('/category', categoryData)
}

// 文章分类修改
export const articleCategoryUpdateService = (categoryData) => {
    return request.put('/category', categoryData)
}

// 文章分类删除
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id='+id)
}