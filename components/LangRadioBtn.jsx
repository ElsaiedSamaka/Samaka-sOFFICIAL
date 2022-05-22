import { useRouter } from "next/router";
import { useCallback } from "react";
import useTranslation from "../hooks/useTranslation";
const LangRadioBtn = () => {
  const router = useRouter();

  const { locale, pathname } = useRouter();
  const { t } = useTranslation(locale);
  const handleClick = useCallback(() => {
    router.push(pathname, pathname, {
      locale: locale === "ar" ? "en" : "ar",
    });
  }, [locale]);
  return (
    <div>
      <input
        id='toggle-on'
        class='toggle toggle-left'
        name='toggle'
        value='false'
        type='radio'
        onClick={handleClick}
      />
      <label for='toggle-on' class='btn'>
        Ar
      </label>
      <input
        id='toggle-off'
        class='toggle toggle-right'
        name='toggle'
        value='true'
        type='radio'
        onClick={handleClick}
      />
      <label for='toggle-off' class='btn'>
        En
      </label>
    </div>
  );
};

export default LangRadioBtn;
