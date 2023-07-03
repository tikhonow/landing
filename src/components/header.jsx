export const Header = (props) => {
  const handleClick = () => {
    window.location.replace('https://ccsam-frontend.vercel.app');
  };
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                    onClick={handleClick}
                    className='btn btn-custom btn-lg page-scroll'
                >
                  Попробовать
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
