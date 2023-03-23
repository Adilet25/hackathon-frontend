import classes from "./GoogleAccount.module.scss";
import google from'../../assets/google.png';
import rectangle2 from'../../assets/rectangle2.png';
import rectangle3 from'../../assets/rectangle3.png';

const GoogleAccount = () => {
  return (
    <div>
      <img src={rectangle2} alt="picture" className={classes.picture}/>
      <img src={rectangle3} alt="picture3" className={classes.picture3}/>
      <img style={{
            position: "absolute",
            width: "24px",
            height: "24px",
            left: "310px",
            top: "100px"
        }} 
            src={google} alt="google" className={classes.google}/>
            <span className={classes.titleSpan}>Войдите в аккаунт Google</span>
            <div className={classes.titleDiv}>
              <h2>Выберите аккаунт</h2>
              <p>для перехода в сайта ”Oimo”</p>
                <div className={classes.inputs}>
                  <div className={classes.inpDiv}>Asel.Asylbekova.silk@gmail.com</div>
                  <div className={classes.inpDiv}>Asel.Asylbekova.silk@gmail.com</div>
                  <div className={classes.inpDiv}>Asel.Asylbekova.silk@gmail.com</div>
                </div>
              <p className={classes.p}>Сайт "Oimok" будет предоставлен доступ к вашим данным: имени, адресу электронной почты, языковым настройкам и фото профиля. Прежде чем начать работу с сайтом “Oimo", вы можете ознакомиться с его политикой конфиденциальности и условиями использования.
              </p>
                <button className={classes.btn}>Далее</button>

            </div>
    </div>
  )
}

export default GoogleAccount