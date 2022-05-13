export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            CC SAM
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Возможности
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                О нас
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Функционал
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Галерея
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Отзывы
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Команда
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Обратная связь
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
