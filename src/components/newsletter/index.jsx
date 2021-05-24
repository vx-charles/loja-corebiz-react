import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'
import axios from 'axios'

function Newsletter() {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [msgStatusNome, setMsgStatusNome] = useState("")
  const [msgStatusEmail, setMsgStatusEmail] = useState("")
  const [msgStatus, setMsgStatus] = useState("")

  const focusName = useRef(null)
  const focusEmail = useRef(null)
  
  const [hide, setHide] = useState(" hide")

  function newsletterSend(name, email) {
    if (name === '' && email === '' )  {
      setMsgStatusNome('Preencha com seu nome completo')
      setMsgStatusEmail('Preencha com um e-mail válido')
      setMsgStatus(styles.alertBorder)
    } else if (name === '') {
      setMsgStatusNome('Preencha com seu nome completo')
      setMsgStatusEmail('')
      setMsgStatus(styles.alertBorder)
      focusName.current.focus()
    } else if (email === '' ) {
      setMsgStatusEmail('Preencha com um e-mail válido')
      setMsgStatusNome('')
      setMsgStatus(styles.alertBorder)
      focusEmail.current.focus()
    } 
    if (name !== '' && email !== '' )  {
      axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
        name,
        email
      }).then(res => {
        setMsgStatus("")
        setMsgStatusNome("")
        setMsgStatusEmail("")
        setHide("")
      }).catch(error => {
        if (name !== '') {
          setMsgStatusNome("")
          setMsgStatus("")
        }
        focusEmail.current.focus()
        setMsgStatusEmail('Preencha com um e-mail válido')
        setMsgStatus(styles.alertBorder)
      })
    }
  }

  function formClean () {
    setName("")
    setEmail("")
    setHide(" hide")
  } 

  return (
    <div className={styles.newsletter}>
      <div className="container">
        <div className={styles.newsContainer}>
          <div className={styles.newsTitle}>
            Participe de nossas news com promoções e novidades!
          </div>
          <div className={styles.newsForm}>
            <label>
              <input ref={focusName} className={msgStatusNome === "" ? "" : msgStatus} type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Digite seu nome" />            
              <div className={styles.alert}>{msgStatusNome}</div>
            </label>
            <label>
              <input ref={focusEmail} className={msgStatusEmail === "" ? "" : msgStatus} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" />
              <div className={styles.alert}>{msgStatusEmail}</div>
            </label>
            <button type="button" onClick={() => newsletterSend(name, email)}>
              Eu quero!
            </button>
          </div>

          <div className={styles.success + hide}>
            <p>Seu e-mail foi cadastrado com sucesso!</p>
            <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>          
            <button type="button" onClick={() => formClean()}>
              Cadastrar novo e-mail
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Newsletter