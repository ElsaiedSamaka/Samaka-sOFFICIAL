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
        className='toggle toggle-left'
        name='toggle'
        value='false'
        type='radio'
        defaultChecked={true}
        onClick={handleClick}
      />
      <label htmlFor='toggle-on' className='btn'>
        {locale === "en" ? "العربية" : "English"}
      </label>
      {/* <input
        id='toggle-off'
        className='toggle toggle-right'
        name='toggle'
        value='true'
        type='radio'
        onClick={handleClick}
        checked={locale === "en"}
        defaultChecked={locale === "en"}
      />
      <label for='toggle-off' className='btn'>
        {locale === "ar" ? "English" : "العربية"}
      </label> */}
    </div>
  );
};

export default LangRadioBtn;
