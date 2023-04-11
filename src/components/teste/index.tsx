import React from 'react';
import { useTranslation } from 'react-i18next';

const Teste: React.FC = () => {
  const {t} =useTranslation();
  return (
    <div>
      <h1>{t ('welcome') }</h1>
      <p>{t ('hello')}</p>
    </div>
  );
};

export default Teste;