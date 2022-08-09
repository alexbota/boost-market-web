import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const [t] = useTranslation();

    return (
        <h1>{t('Translated text')}</h1>
    );
}