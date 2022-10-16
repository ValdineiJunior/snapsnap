import { useState } from 'react'
import styles from './Buttons.module.css'

export function Buttons() {

  let sinonimos = ['apple','air','animal','baby','ball','bear','bed','bell','bird','birthday','boat','box','boy','bread','brother','cake','car','cat','chair','chicken','children','Christmas','coat','corn','cow','dog','doll','door','duck','egg','eye','farm','farmer','father','feet','fire','fish','flower','game','garden','girl','glass','grass','ground','hand','head','help','hill','horse','house','job','kitty','leg','milk','money','month','morning','mother','party','pig','rabbit','rain','ring','school','seed','sheep','shoe','squirrel','street','sun','table','toy','tree','water','wind','window','wood','wheel','leaf','mirror','snow','snake','gate','river','wing','pool','eagle','cherry','pants','soda','steak','rail','donkey','blackberry','milkshake','ear','butterfly','orange','fork','candy','jam','padlock','melon','dumpster','bathtub','tail','butter','wallet','hen','watermelon','scissors','coffee','peach','stone','hopscotch','fish','coconut','drawer','juice','knife','sand','turtle','grape','fridge','beer','book','waiter','crab','strawberry','bed','milk','cloud','glove','lawnmower','pineapple','spoon','tea','cheese','newspaper','jigsaw','wolf','avocado','wine','helmet','luggage','olive','sock','doll','cracker','umbrella','bell','stair','ribbon','knight','hammer','soap','rope','rainbow','ship','cushion','fox','wave','feather','teacher','puppy'
  ]
  function randomSnap() {
    let images = []
    images.push(sinonimos[Math.floor(Math.random()*sinonimos.length)])
    images.push(sinonimos[Math.floor(Math.random()*sinonimos.length)])
    images.push(sinonimos[Math.floor(Math.random()*sinonimos.length)])
    images.push(sinonimos[Math.floor(Math.random()*sinonimos.length)])
    return images
  }
  const [renderImage, setRenderImage] = useState(randomSnap)
  
  function handleChoseAnswer() {
    console.log(correctAnswer)
    setRenderImage(randomSnap)
  }
  const correctAnswer = renderImage[Math.floor(Math.random()*4)]
  const url = `https://source.unsplash.com/800x600/?}${correctAnswer}`

  return (
    <div>
    <div className={styles.box}>
      <img className={styles.image} src={url} alt="leaf" />
    </div>
    <div className={styles.container}>
      <button onClick={handleChoseAnswer} className={styles.button}>{renderImage[0]}</button>
      <button onClick={handleChoseAnswer} className={styles.button}>{renderImage[1]}</button>
      <button onClick={handleChoseAnswer} className={styles.button}>{renderImage[2]}</button>
      <button onClick={handleChoseAnswer} className={styles.button}>{renderImage[3]}</button>
    </div>
    </div>
  )
}