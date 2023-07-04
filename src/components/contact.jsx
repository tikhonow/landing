import { useState } from 'react'
import emailjs from 'emailjs-com'
import axios from 'axios'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormSuccess, setIsFormSuccess] = useState(false);


  const sendTelegramMessage = (name, email, message) => {
    const telegramUrl = 'https://api.telegram.org/bot6126876615:AAEvwRBurYXJbuvLpj585mfnIBO3nsCnqsk/sendMessage';
    const chatId = '-1001981649009';
    const telegramMessage = `Новое сообщение от пользователя:\n\nИмя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

    axios.post(telegramUrl, { chat_id: chatId, text: telegramMessage })
        .then((response) => {
          console.log(response.status);
          // Здесь можно добавить обработку успешной отправки сообщения
        })
        .catch((error) => {
          console.error(error);
          // Здесь можно добавить обработку ошибки отправки сообщения
        });
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    sendTelegramMessage(name, email, message);
    setIsFormSubmitted(true);
    setIsFormSuccess(true);
    setState({ ...initialState });
    setTimeout(() => {
      setIsFormSubmitted(false);
      setIsFormSuccess(false);
    }, 5000);
  };


  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Обратная связь</h2>
                <p>
                  Пожалуйста, заполните форму ниже, опишите свое впечатление от приложения ,какие трудности у вас возникли.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button
                    type='submit'
                    className='btn btn-custom btn-lg'
                    style={{ backgroundColor: isFormSuccess ? 'green' : '' }}
                    disabled={isFormSubmitted}
                >
                  {isFormSubmitted ? 'Ваш ответ получен' : 'Отправить'}
                </button>


              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Контактная информация</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Адрес
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Телефон
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Электронная почта
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2023 ООО {' '}
            <a href='https://www.rusprofile.ru/id/1232500002657' rel='nofollow'>
              "МьюзикЛАБ"
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
