# Fast-food restorani uchun BackEnd API 🍔

## Loyihaning maqsadi: 
 Biror bir fast-food restorani uchun menyularni ko'rish va ovqatlarga buyurtma berish imkoniyatini beruvchi loyihaning backend API qismi


## Funksional talablar:
- Barcha taomlarni category'lari bo'lishi kerak. Misol, burgerlar,oitsalar, ichimliklar va hokazo
- Har bir taom biror category'ga mansub bo'lishi kerak
- Taomning 1 ta rasmi, nomi,narxi,description ni bo'lishi kerak
- Foydalanuvchi ro'yxattan o'tmagan holatta ham category va taomlarni ko'ra olishi kerak.
- Foydalanuvchi email va name bilan ro'yxattan o'tadi
- Profilga kirish email orqali bo'ladi
- Foydalanuvchi savatga maxsulotlar qo'sha olishi kerak
- Foydalanuvchi bir nechta mahsulot zakaz qila olishi kerak
- Foydalanuvchi o'zining zakazlar tarixini ko'ra olishi kerak
- Foydalanuvchi profilini yangilay oplishi kerak



## Nofunksional talablar:
-Tozalik
-Xavfsizlik
-Kengaya oladigan loyiha bo'lishi kerak



## Database model: 🗓️

1. Category:
- id
- name
- createdAt
- updateAt

2. Food:
- id
- name
- price
- description
- imageUrl
- createAt
- updateAt
- categoryId (FK)

3. User:
- id
- name
- email
- phoneNumber
- imageUrl
- createAt
- updateAt

4. Orders:
- id
- createdAt
- total_price
- userId (FK)

5. OrderItem:
- count
- orderId(FK)
- foodId (FK)
