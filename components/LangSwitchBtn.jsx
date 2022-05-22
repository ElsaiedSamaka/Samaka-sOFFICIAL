import { useRouter } from "next/router";
import { useCallback } from "react";
import useTranslation from "../hooks/useTranslation";

const LangSwitchBtn = ( props ) => {
  const router = useRouter();
    
  const { locale, pathname } = useRouter();
  const { t } = useTranslation(locale);
  const handleClick = useCallback(() => {
    router.push(pathname, pathname, { locale: locale === "ar" ? "en" : "ar" });
  }, [locale]);
  return (
    <button className='lang-switch-btn' onClick={handleClick}>
      <span>{t("lang")}</span>
    </button>
  );
};

export default LangSwitchBtn;
