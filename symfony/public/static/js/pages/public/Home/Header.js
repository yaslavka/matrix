import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classnames from 'classnames';

import routes from '../../../constants/routes.constants';

function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation('common');

  console.log(`i18n`, i18n);

  const handleHamburgerClick = () => {
    if (window.matchMedia('(max-width: 1300px)').matches) {
      document.querySelector('body').classList.toggle('no-scroll');
      setOpen(!open);
    }
  };

  return (
    <header
      className={classnames('header', { 'header--transform-none': false })}
      data-aos="fade-down"
      data-aos-duration="300"
    >
      <div className="header__container">
        <div className="header__flex">
          <div className="header__box">
            <Link
              to="/"
              className={classnames('header__logo-link', { 'd-none ': open })}
            >
              <svg
                className="header__logo-star"
                width="42"
                height="40"
                viewBox="0 0 42 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2285 18.7352C14.3365 18.4008 14.8096 18.4008 14.9176 18.7352L15.9141 21.8198C15.9624 21.9693 16.1016 22.0706 16.2587 22.0706H19.488C19.8382 22.0706 19.9844 22.5184 19.7016 22.7251L17.0855 24.6367C16.9593 24.7289 16.9065 24.8916 16.9546 25.0403L17.953 28.1308C18.0609 28.4647 17.6782 28.7415 17.3948 28.5344L14.7867 26.6286C14.6594 26.5357 14.4866 26.5357 14.3594 26.6286L11.7512 28.5344C11.4679 28.7415 11.0852 28.4647 11.1931 28.1308L12.1915 25.0403C12.2395 24.8916 12.1867 24.7289 12.0606 24.6367L9.44446 22.7251C9.16165 22.5184 9.30782 22.0706 9.65809 22.0706H12.8874C13.0445 22.0706 13.1836 21.9693 13.2319 21.8198L14.2285 18.7352Z"
                  fill="white"
                />
                <path
                  d="M13.6579 15.7854L12.2726 19.7874C12.2219 19.934 12.0839 20.0322 11.9288 20.0322H6.48715C6.409 20.0322 6.33293 20.0071 6.27019 19.9605L0.882901 15.9585C0.601556 15.7495 0.749376 15.3026 1.09985 15.3026H13.3141C13.5642 15.3026 13.7397 15.5491 13.6579 15.7854Z"
                  fill="#8083E6"
                />
                <path
                  d="M18.851 31.222L15.3942 28.7755C15.2676 28.6859 15.0982 28.6864 14.9721 28.7767L10.5485 31.9457C10.4849 31.9913 10.4378 32.056 10.4139 32.1304L8.36507 38.5211C8.25807 38.8549 8.63848 39.1321 8.9234 38.928L18.8527 31.8148C19.056 31.6691 19.0551 31.3665 18.851 31.222Z"
                  fill="#4B0FB2"
                />
                <path
                  d="M21.6098 31.0238L19.7396 25.6683C19.6845 25.5104 19.7442 25.3352 19.8843 25.2437L27.1725 20.4872C27.4826 20.2848 27.3275 19.8027 26.9576 19.819L18.2857 20.2028C18.122 20.21 17.9737 20.1069 17.9234 19.951L16.2251 14.6865C16.2019 14.6145 16.2017 14.5371 16.2245 14.465L20.3918 1.2963C20.4989 0.958025 20.9774 0.957413 21.0853 1.29542L25.4769 15.0503C25.5251 15.2011 25.6652 15.3035 25.8235 15.3035H40.4445C40.7971 15.3035 40.9435 15.7548 40.6581 15.9618L28.8636 24.517C28.7363 24.6093 28.6827 24.773 28.7309 24.9228L33.2156 38.8753C33.3238 39.2119 32.9369 39.4894 32.6528 39.279L21.7367 31.1962C21.6781 31.1528 21.6338 31.0927 21.6098 31.0238Z"
                  fill="#4B0FB2"
                />
              </svg>
              <svg
                className="header__logo-text"
                width="57"
                height="18"
                viewBox="0 0 57 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.0476 17.499C50.9942 17.499 49.988 17.326 49.029 16.9801C48.0699 16.6343 47.2445 16.1233 46.5527 15.4472L47.6847 13.3955C48.4237 13.9929 49.1469 14.4332 49.8544 14.7162C50.5619 14.9992 51.2537 15.1407 51.9297 15.1407C52.5429 15.1407 53.0303 15.0306 53.3919 14.8105C53.7692 14.5904 53.9579 14.2602 53.9579 13.82C53.9579 13.364 53.7299 13.0575 53.274 12.9002C52.818 12.7273 52.1813 12.515 51.3637 12.2635C50.4518 11.9805 49.6893 11.6896 49.0761 11.3909C48.463 11.0922 47.9992 10.7306 47.6847 10.3061C47.386 9.88158 47.2366 9.33131 47.2366 8.65525C47.2366 7.44464 47.6926 6.47773 48.6045 5.75451C49.5164 5.03129 50.727 4.66968 52.2363 4.66968C53.1167 4.66968 53.95 4.81118 54.7361 5.09418C55.5222 5.36145 56.2376 5.80168 56.8822 6.41484L55.6087 8.41942C54.3981 7.47609 53.2268 7.00442 52.0948 7.00442C51.5917 7.00442 51.1436 7.09876 50.7506 7.28742C50.3732 7.47609 50.1846 7.80625 50.1846 8.27792C50.1846 8.71814 50.3654 9.03258 50.727 9.22125C51.1043 9.40992 51.6703 9.6143 52.425 9.83441C53.3997 10.1331 54.2252 10.424 54.9012 10.707C55.593 10.99 56.1118 11.3516 56.4577 11.7918C56.8193 12.232 57.0001 12.8295 57.0001 13.5842C57.0001 14.8105 56.552 15.7695 55.6559 16.4613C54.7597 17.1531 53.557 17.499 52.0476 17.499Z"
                  fill="white"
                />
                <path
                  d="M43.2581 8.49531C44.0128 8.11797 44.8696 7.92931 45.8287 7.92931V5.05215C45.7344 5.03643 45.5221 5.02856 45.1919 5.02856C44.4373 5.07573 43.7141 5.34301 43.0223 5.8304C42.3462 6.31778 41.7959 6.98598 41.3714 7.83497V5.19365H38.4707V6.73835V7.5107V7.89622V7.89688V7.96975C38.9854 7.89622 40.0589 7.96975 40.2354 8.8521C40.456 9.95505 39.7942 10.9845 38.4707 11.1315V11.3725V17.5513H41.6309V10.0754C41.961 9.38361 42.5034 8.85692 43.2581 8.49531Z"
                  fill="white"
                />
                <path
                  d="M16.2747 7.349V14.4476L19.4349 13.3863V7.349H22.029V4.91992H19.4349V0.910767H16.2747V4.91992H14.6475V7.349H16.2747Z"
                  fill="white"
                />
                <path
                  d="M21.3922 17.2069C22.0211 17.0183 22.5478 16.8296 22.9723 16.6409L22.3355 14.1411L16.4121 15.4697C16.4121 15.6168 16.4856 15.8374 16.6991 16.2164C16.9978 16.6567 17.3909 16.979 17.8783 17.1834C18.3657 17.3877 18.9002 17.4899 19.4819 17.4899C20.1423 17.4899 20.779 17.3956 21.3922 17.2069Z"
                  fill="white"
                />
                <path
                  d="M10.8352 4.36121C11.2911 4.61277 11.5898 4.81715 11.7313 4.97438L13.1699 2.33305C12.4467 1.84566 11.582 1.4133 10.5758 1.03597C9.56955 0.658637 8.48472 0.469971 7.32128 0.469971C6.18928 0.469971 5.15948 0.674359 4.23187 1.08314C3.30426 1.47619 2.56532 2.06577 2.01504 2.85188C1.48049 3.62227 1.21321 4.58132 1.21321 5.72904C1.21321 6.59376 1.38616 7.30912 1.73204 7.87512C2.07793 8.42539 2.59676 8.8892 3.28854 9.26653C3.99604 9.62814 4.88434 9.95831 5.95345 10.257C6.81817 10.5086 7.57283 10.7366 8.21744 10.9409C8.87777 11.1453 9.38874 11.3969 9.75035 11.6956C10.112 11.9943 10.2928 12.3874 10.2928 12.8748C10.2928 14.0225 9.39661 14.5963 7.60428 14.5963C6.97539 14.5963 6.35436 14.5177 5.7412 14.3605C5.12803 14.2033 4.56204 14.0146 4.0432 13.7945C3.52437 13.5587 3.08415 13.3307 2.72254 13.1106C2.36093 12.8748 2.10938 12.6861 1.96788 12.5446L0.529297 15.351C1.48835 16.0271 2.58104 16.5616 3.80737 16.9547C4.34548 17.097 5.52805 17.3671 5.95345 17.3082L12.9558 15.3965C13.5375 14.6575 13.7595 13.7395 13.7595 12.5446C13.7595 11.5227 13.5394 10.7051 13.0992 10.0919C12.6747 9.46306 12.0537 8.95995 11.2361 8.58262C10.4343 8.20528 9.48308 7.87512 8.38253 7.59212C7.53353 7.37201 6.82603 7.16762 6.26003 6.97895C5.69403 6.79029 5.26953 6.56232 4.98653 6.29504C4.70354 6.02776 4.56204 5.66615 4.56204 5.21021C4.56204 3.95243 5.45034 3.32355 7.22695 3.32355C7.903 3.32355 8.55547 3.4336 9.18436 3.65371C9.82897 3.8581 10.3792 4.09393 10.8352 4.36121Z"
                  fill="white"
                />
                <path
                  d="M7.55687 17.5208C8.65743 17.5208 9.67937 17.3557 10.6227 17.0255C11.1069 16.8561 11.5414 16.6348 11.9261 16.3618L6.33789 17.4554L7.55687 17.5208Z"
                  fill="white"
                />
                <path
                  d="M24.5717 11.5499C25.0276 10.9368 25.6565 10.4651 26.4583 10.1349C27.2602 9.80478 28.1799 9.6397 29.2176 9.6397C29.7364 9.6397 30.2631 9.68686 30.7977 9.7812C31.1748 9.80683 31.5285 9.87554 31.9461 9.88109L32.0082 9.86306L32.1891 9.47461C32.1891 8.6885 31.9533 8.0832 31.4816 7.6587C31.0256 7.2342 30.3417 7.02195 29.4298 7.02195C28.7538 7.02195 28.1092 7.13987 27.496 7.3757C26.8828 7.61153 26.2382 7.95742 25.5622 8.41337L24.5481 6.33804C25.3657 5.80348 26.1989 5.40257 27.0479 5.13529C27.9127 4.86801 28.8167 4.73438 29.76 4.73438C31.5209 4.73438 32.8887 5.1746 33.8635 6.05504C34.8673 6.86673 35.0143 7.3757 35.2349 8.92556L32.0082 9.86306L31.9996 9.88145C31.9817 9.88145 31.9638 9.88132 31.9461 9.88109L24.3525 12.0873L24.5717 11.5499Z"
                  fill="white"
                />
                <path
                  d="M35.5151 14.498C35.405 14.3565 35.35 14.1128 35.35 13.7669L35.3264 11.7933L32.0739 12.4551L32.1898 13.2009C32.1898 13.5468 31.9933 13.9084 31.6003 14.2857C31.3015 14.5687 30.9242 14.7967 30.4683 14.9696C30.028 15.1426 29.5721 15.229 29.1004 15.229C28.3929 15.229 27.8505 15.0404 27.4732 14.663C27.0959 14.2857 26.9072 13.8612 26.9072 13.3895L23.9121 13.9257C23.9121 14.6646 24.0929 15.0561 24.4545 15.6535C24.8319 16.2353 25.3428 16.6991 25.9874 17.045C26.632 17.3751 27.371 17.5402 28.2043 17.5402C29.0375 17.5402 29.8472 17.3594 30.6333 16.9978C31.4352 16.6205 32.1112 16.078 32.6615 15.3705L32.7323 16.0073C32.7951 16.4161 32.9917 16.762 33.3218 17.045C33.652 17.328 34.1315 17.4695 34.7604 17.4695C34.9176 17.4695 35.1063 17.4537 35.3264 17.4223C35.5622 17.4066 35.8217 17.3673 36.1047 17.3044V14.7338C35.8217 14.7023 35.6251 14.6237 35.5151 14.498Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>

          <div className={classnames('header__mob-menu', { open })}>
            <div className="header__box">
              <nav className="nav">
                <a
                  className="nav__item"
                  href="#about"
                  onClick={handleHamburgerClick}
                >
                  {t('mainPage.header.navLinks.aboutProject')}
                </a>
                <a
                  className="nav__item"
                  href="#advantages"
                  onClick={handleHamburgerClick}
                >
                  {t('mainPage.header.navLinks.advantages')}
                </a>
                <a
                  href="#roadmap"
                  className="nav__item"
                  onClick={handleHamburgerClick}
                >
                  Roadmap
                </a>
                <a
                  className="nav__item"
                  href="#materials"
                  onClick={handleHamburgerClick}
                >
                  {t('mainPage.header.navLinks.materials')}
                </a>
              </nav>
            </div>

            <Link
              to={routes.signIn}
              className="header-mob__btn header-mob__sign-in button"
            >
              {t('mainPage.header.links.signin')}
            </Link>
            <Link
              to={routes.signUp}
              className="header-mob__btn header-mob__registration button button--violet"
            >
              {t('mainPage.header.links.signup')}
            </Link>

            <div className="header__box">
              <div className="header__social">
                <a
                  className="header__social-link"
                  href="https://t.me/joinchat/5trTW-xurLRlN2Uy"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.84765 12.2832L7.51682 17.1692C7.99015 17.1692 8.19515 16.9557 8.44098 16.6994L10.6601 14.4725L15.2585 18.0084C16.1018 18.5019 16.696 18.242 16.9235 17.1937L19.9418 2.34324L19.9426 2.34237C20.2101 1.03337 19.4918 0.521492 18.6701 0.842617L0.928482 7.97474C-0.282352 8.46824 -0.264018 9.17699 0.722648 9.49812L5.25848 10.9795L15.7943 4.05737C16.2901 3.71262 16.741 3.90337 16.3701 4.24812L7.84765 12.2832Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
                <a
                  className="header__social-link"
                  href="https://vk.com/public202035837"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5958 11.2245C16.2725 10.7957 16.365 10.605 16.5958 10.2217C16.6 10.2173 19.2692 6.34458 19.5442 5.0312L19.5458 5.03033C19.6825 4.5517 19.5458 4.19995 18.885 4.19995H16.6983C16.1417 4.19995 15.885 4.50183 15.7475 4.83958C15.7475 4.83958 14.6342 7.63783 13.0592 9.4517C12.5508 9.97583 12.3158 10.1438 12.0383 10.1438C11.9017 10.1438 11.6892 9.97583 11.6892 9.4972V5.03033C11.6892 4.45633 11.5333 4.19995 11.0725 4.19995H7.63417C7.285 4.19995 7.0775 4.4677 7.0775 4.71708C7.0775 5.26133 7.865 5.38645 7.94667 6.9177V10.2401C7.94667 10.9681 7.82083 11.102 7.54167 11.102C6.79833 11.102 4.99417 8.29233 3.925 5.0767C3.70917 4.45283 3.49833 4.20083 2.9375 4.20083H0.75C0.125833 4.20083 0 4.5027 0 4.84045C0 5.4372 0.743333 8.40433 3.45667 12.3243C5.265 15.0001 7.81167 16.45 10.1283 16.45C11.5208 16.45 11.6908 16.128 11.6908 15.5741C11.6908 13.0173 11.565 12.7758 12.2625 12.7758C12.5858 12.7758 13.1425 12.9438 14.4425 14.2345C15.9283 15.7648 16.1725 16.45 17.0042 16.45H19.1908C19.8142 16.45 20.13 16.128 19.9483 15.4927C19.5325 14.1566 16.7225 11.4082 16.5958 11.2245Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
                <a
                  className="header__social-link"
                  href="https://instagram.com/stars_matrix?igshid=saos17iyb7lx"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0419 0H5.95811C2.67279 0 0 2.80643 0 6.25601V14.744C0 18.1936 2.67279 21 5.95811 21H14.0419C17.3272 21 20 18.1936 20 14.744V6.25601C20 2.80643 17.3272 0 14.0419 0ZM17.988 14.744C17.988 17.0323 16.2213 18.8874 14.0419 18.8874H5.95811C3.77875 18.8874 2.012 17.0323 2.012 14.744V6.25601C2.012 3.96765 3.77875 2.1126 5.95811 2.1126H14.0419C16.2213 2.1126 17.988 3.96765 17.988 6.25601V14.744Z"
                      fill="#8083E6"
                    />
                    <path
                      d="M9.99986 5.0686C7.14762 5.0686 4.82715 7.5051 4.82715 10.4999C4.82715 13.4947 7.14762 15.9313 9.99986 15.9313C12.8521 15.9313 15.1726 13.4948 15.1726 10.4999C15.1726 7.50506 12.8521 5.0686 9.99986 5.0686ZM9.99986 13.8187C8.25423 13.8187 6.83915 12.3329 6.83915 10.5C6.83915 8.66704 8.25427 7.1812 9.99986 7.1812C11.7455 7.1812 13.1606 8.66704 13.1606 10.5C13.1606 12.3328 11.7455 13.8187 9.99986 13.8187Z"
                      fill="#8083E6"
                    />
                    <path
                      d="M15.1828 6.41091C15.8674 6.41091 16.4223 5.82822 16.4223 5.10945C16.4223 4.39067 15.8674 3.80798 15.1828 3.80798C14.4983 3.80798 13.9434 4.39067 13.9434 5.10945C13.9434 5.82822 14.4983 6.41091 15.1828 6.41091Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
                <a
                  className="header__social-link"
                  href="https://www.youtube.com/channel/UCrmcF7JcICRxIYCMMnPyrrg"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8463 3.06995H4.15374C1.85969 3.06995 0 5.02262 0 7.43138V13.5686C0 15.9774 1.85969 17.9301 4.15374 17.9301H15.8463C18.1403 17.9301 20 15.9774 20 13.5686V7.43138C20 5.02262 18.1403 3.06995 15.8463 3.06995ZM13.0371 10.7986L7.56814 13.5374C7.42241 13.6104 7.25408 13.4988 7.25408 13.3293V7.68055C7.25408 7.50863 7.42684 7.39721 7.57287 7.47493L13.0418 10.3849C13.2044 10.4714 13.2016 10.7163 13.0371 10.7986Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="header__box">
              <div className="header__lang-switcher">
                <Link
                  to="#"
                  className={`header__lang ${
                    i18n.language === 'en' ? 'header__lang--active' : ''
                  }`}
                  onClick={() => {
                    i18n.changeLanguage('en');
                  }}
                >
                  EN
                </Link>
                <Link
                  to="#"
                  className={`header__lang ${
                    i18n.language === 'ru' ? 'header__lang--active' : ''
                  }`}
                  onClick={() => {
                    i18n.changeLanguage('ru');
                  }}
                >
                  RU
                </Link>
                <Link
                  to="#"
                  className={`header__lang ${
                    i18n.language === 'kz' ? 'header__lang--active' : ''
                  }`}
                  onClick={() => {
                    i18n.changeLanguage('kz');
                  }}
                >
                  KZ
                </Link>
              </div>
            </div>
          </div>
          <div className="header__box">
            <Link to={routes.signIn} className="header__sign-in">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2608 10.6824H0.652174C0.292173 10.6824 0 10.3769 0 10.0005C0 9.62418 0.292173 9.31873 0.652174 9.31873H13.2608C13.6208 9.31873 13.913 9.62418 13.913 10.0005C13.913 10.3769 13.6208 10.6824 13.2608 10.6824Z"
                  fill="white"
                />
                <path
                  d="M9.78239 14.3184C9.61536 14.3184 9.4485 14.2522 9.32144 14.1185C9.06668 13.8522 9.06668 13.4204 9.32144 13.1539L12.3389 9.99948L9.32144 6.84492C9.06668 6.57859 9.06668 6.14663 9.32144 5.88029C9.57635 5.61396 9.98937 5.61396 10.2441 5.88029L13.7223 9.51675C13.9771 9.78308 13.9771 10.2149 13.7223 10.4812L10.2441 14.1175C10.1163 14.2522 9.94941 14.3184 9.78239 14.3184Z"
                  fill="white"
                />
                <path
                  d="M10.4345 20C6.47703 20 2.98321 17.5109 1.5319 13.6581C1.39975 13.309 1.56486 12.9127 1.89971 12.7745C2.2336 12.6382 2.61366 12.8082 2.74581 13.16C3.99889 16.4864 7.01711 18.6364 10.4345 18.6364C14.9892 18.6364 18.6954 14.7617 18.6954 10C18.6954 5.23829 14.9892 1.36363 10.4345 1.36363C7.01711 1.36363 3.99889 3.51361 2.74581 6.83995C2.6127 7.19184 2.2336 7.3618 1.89971 7.22547C1.56486 7.08731 1.39975 6.69097 1.5319 6.34191C2.98321 2.48906 6.47703 0 10.4345 0C15.7084 0 19.9998 4.48639 19.9998 10C19.9998 15.5136 15.7084 20 10.4345 20Z"
                  fill="white"
                />
              </svg>
              <span>{t('mainPage.header.links.signin')}</span>
            </Link>
            <div
              className={classnames('nav__hamburger', { open })}
              onClick={handleHamburgerClick}
            >
              <span className="nav__bar nav__bar--1"></span>
              <span className="nav__bar nav__bar--2"></span>
              <span className="nav__bar nav__bar--3"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
