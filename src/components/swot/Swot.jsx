import React from "react";
import './swots.css'
import { useTranslation } from "react-i18next";

const Swot = () => {
  const { t } = useTranslation()
  return (
    <div>
      <main className="main-swot main">
        <section className="section-swot">
          <div className="grid-swot1">
            <p className="p-swot pswot1">{t('s')}</p>
            <ul>
              <li>{t('s1')}</li>
              <li>{t('s2')}</li>
              <li>{t('s3')}</li>
            </ul>
          </div>
          <div className="grid-swot2">
            <p className="p-swot pswot2">{t('w')}</p>
            <ul>
              <li>{t('w1')}</li>
              <li>{t('w2')}</li>
            </ul>
          </div>
          <div className="grid-swot3">
            <p className="p-swot pswot3">{t('o')}</p>
            <ul>
              <li>{t('o1')}</li>
              <li>{t('o2')}</li>
              <li>{t('o3')}</li>
            </ul>
          </div>
          <div className="grid-swot4">
            <p className="p-swot pswot4">{t('t')}</p>
            <ul>
              <li>{t('t1')}</li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Swot;
