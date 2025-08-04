export interface PostProps {
    category: string;       // например, "Front-end"
    date: string;           // например, "1 месяц назад"
    point: string;           // точка
    title1: string;          // заголовок карточки
    description1: string;    // короткий анонс
    title2: string;          // заголовок карточки
    description2: string;    // короткий анонс
    readTime: string;       // например, "3 минуты"
    likeCount?: number;
    isLiked?: boolean;
}