'use client';

import {Card} from "@/components";


export default function HomePage() {
    return (
       <>
           <Card
               category="Front-end"
               point="·"
               date="1 месяц назад"
               title="Как работать с CSS Grid"
               description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
               readTime="3 минуты"
               onReadClick={() => {}}
               likeCount={4}
               isLiked={false}
           />
           <Card
               category="Front-end"
               point="·"
               date="1 месяц назад"
               title="Как работать с CSS Grid"
               description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
               readTime="3 минуты"
               onReadClick={() => {}}
               likeCount={4}
               isLiked={false}
           />
           <Card
               category="Front-end"
               point="·"
               date="1 месяц назад"
               title="Как работать с CSS Grid"
               description="Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы.."
               readTime="3 минуты"
               onReadClick={() => {}}
               likeCount={4}
               isLiked={false}
           />



       </>
    );
}
