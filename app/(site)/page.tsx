'use client';
import {ButtonLike, Card} from "../../components";



export default function HomePage() {
    return (
        <section className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
            <>
                <ButtonLike isActive={false} />
            </>
        </section>
    );
}
