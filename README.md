В проекті використано React.
Структура сторінки передбачає хедінг та стрічку постів.

Пост складався з наступних компонентів:
FeedItemHeading: Avatar та ім'я користувача

nFeedItemVideo

FeedItemDescription

FeedItemHashtag

FeedItemFooter: вкладений файл Comments

Редагуючи структуру папок і маючи проблеми з апдейтом нод-модулів, я випадково видалила частину компонентів поста 17 числа о 21.30 :((((
Сторінку в браузері я не оновила, через що маю відео запис вигляду проекту до видалення компонентів: https://github.com/KaterynaKandziuba/tiktuk/blob/main/2021-11-17_21h37_44.mp4

відео я завантажувала не з API, а безпосередньо з YouTube
(API response виглядав наступним чином: 
{
"killed":false
"code":1
"signal":NULL
"cmd":"python ./scripts/getUserFeed.py dave.xp 10.10.40.6:38004"
})
