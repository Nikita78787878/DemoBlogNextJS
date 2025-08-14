'use client'
import {JSX} from "react";
import {useForm} from "react-hook-form";
import {IReviewForm} from "@/components/ReviewForm/ReviewForm.interface";
import {Button, Input, TextArea} from "@/components";
import cn from "classnames";
import styles from "./ReviewForm.module.css";


export const ReviewForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm<IReviewForm>();

    const onSubmit = async () => {
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm)}
            >
                <Input
                    {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                    placeholder={'Имя'}
                    error={errors.name}
                />
                <TextArea {...register('description', {required: {value: true, message: 'Заполните комментарий'}})}
                          placeholder={'Комментарий'}
                          className={styles.description}
                          error={errors.description}
                />
                <div className={styles.submit}>
                    <Button>Отправить</Button>
                </div>
            </div>
        </form>
    );
};